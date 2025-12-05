#!/usr/bin/env node

/**
 * Security Monitoring and Alerting System
 * Monitors for security events and suspicious activities
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class SecurityMonitor {
  constructor(options = {}) {
    this.options = {
      logFile: options.logFile || 'security-events.log',
      alertThreshold: options.alertThreshold || 5,
      timeWindow: options.timeWindow || 5 * 60 * 1000, // 5 minutes
      enableAlerts: options.enableAlerts !== false,
      ...options
    };
    
    this.events = [];
    this.alertCounts = new Map();
    this.setup();
  }

  // Setup monitoring
  setup() {
    console.log('🔒 Security Monitor starting...');
    console.log(`📝 Logging to: ${this.options.logFile}`);
    
    // Ensure log directory exists
    const logDir = path.dirname(this.options.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // Start monitoring intervals
    this.startPeriodicChecks();
  }

  // Log security event
  logEvent(type, severity, details, metadata = {}) {
    const event = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      type,
      severity,
      details,
      metadata,
      source: metadata.source || 'unknown'
    };

    this.events.push(event);
    this.writeToLogFile(event);
    
    // Check for alert conditions
    if (this.shouldAlert(type, severity)) {
      this.sendAlert(event);
    }

    return event.id;
  }

  // Write event to log file
  writeToLogFile(event) {
    const logEntry = `${event.timestamp} [${event.severity}] ${event.type}: ${event.details}\n`;
    
    try {
      fs.appendFileSync(this.options.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  // Check if should send alert
  shouldAlert(type, severity) {
    if (!this.options.enableAlerts) return false;
    
    // Always alert on critical events
    if (severity === 'CRITICAL') return true;
    
    // Count events in time window
    const now = Date.now();
    const key = `${type}_${severity}`;
    
    if (!this.alertCounts.has(key)) {
      this.alertCounts.set(key, []);
    }
    
    const counts = this.alertCounts.get(key);
    counts.push(now);
    
    // Remove old entries outside time window
    while (counts.length > 0 && now - counts[0] > this.options.timeWindow) {
      counts.shift();
    }
    
    return counts.length >= this.options.alertThreshold;
  }

  // Send security alert
  sendAlert(event) {
    console.log('\n🚨 SECURITY ALERT');
    console.log('═'.repeat(50));
    console.log(`Type: ${event.type}`);
    console.log(`Severity: ${event.severity}`);
    console.log(`Details: ${event.details}`);
    console.log(`Timestamp: ${event.timestamp}`);
    console.log(`Source: ${event.source}`);
    
    if (Object.keys(event.metadata).length > 0) {
      console.log('Metadata:', JSON.stringify(event.metadata, null, 2));
    }
    
    console.log('═'.repeat(50));
    
    // Here you could integrate with:
    // - Email notifications (using nodemailer)
    // - Slack webhooks
    // - PagerDuty
    // - SMS alerts
    // - Custom notification systems
  }

  // Monitor failed authentication attempts
  monitorFailedAuth(req, reason = 'Invalid credentials') {
    const ip = this.getClientIP(req);
    const userAgent = req.headers['user-agent'] || 'unknown';
    
    this.logEvent(
      'FAILED_AUTHENTICATION',
      'MEDIUM',
      `Failed authentication attempt from ${ip}`,
      {
        source: 'auth_monitor',
        ip,
        userAgent,
        reason,
        endpoint: req.path || req.url
      }
    );
  }

  // Monitor suspicious requests
  monitorSuspiciousRequest(req, reason) {
    const ip = this.getClientIP(req);
    const userAgent = req.headers['user-agent'] || 'unknown';
    
    this.logEvent(
      'SUSPICIOUS_REQUEST',
      'HIGH',
      `Suspicious request detected: ${reason}`,
      {
        source: 'request_monitor',
        ip,
        userAgent,
        method: req.method,
        path: req.path || req.url,
        reason
      }
    );
  }

  // Monitor rate limit violations
  monitorRateLimitViolation(req, limit) {
    const ip = this.getClientIP(req);
    
    this.logEvent(
      'RATE_LIMIT_VIOLATION',
      'MEDIUM',
      `Rate limit exceeded for ${ip}`,
      {
        source: 'rate_limiter',
        ip,
        limit: limit.max,
        window: limit.windowMs,
        endpoint: req.path || req.url
      }
    );
  }

  // Monitor file access violations
  monitorFileAccess(filePath, action, user, success = true) {
    const severity = success ? 'LOW' : 'HIGH';
    const details = success 
      ? `File ${action}: ${filePath}`
      : `Unauthorized file ${action} attempt: ${filePath}`;
    
    this.logEvent(
      'FILE_ACCESS',
      severity,
      details,
      {
        source: 'file_monitor',
        filePath,
        action,
        user: user || 'anonymous',
        success
      }
    );
  }

  // Monitor SQL injection attempts
  monitorSQLInjection(req, query, detectionMethod) {
    const ip = this.getClientIP(req);
    
    this.logEvent(
      'SQL_INJECTION_ATTEMPT',
      'CRITICAL',
      `SQL injection attempt detected from ${ip}`,
      {
        source: 'sql_monitor',
        ip,
        query: query.substring(0, 100) + '...',
        detectionMethod,
        endpoint: req.path || req.url
      }
    );
  }

  // Monitor XSS attempts
  monitorXSSAttempt(req, payload, field) {
    const ip = this.getClientIP(req);
    
    this.logEvent(
      'XSS_ATTEMPT',
      'HIGH',
      `XSS attempt detected in field: ${field}`,
      {
        source: 'xss_monitor',
        ip,
        field,
        payload: payload.substring(0, 100) + '...',
        endpoint: req.path || req.url
      }
    );
  }

  // Monitor administrative actions
  monitorAdminAction(user, action, target, success = true) {
    const severity = success ? 'LOW' : 'MEDIUM';
    
    this.logEvent(
      'ADMIN_ACTION',
      severity,
      `Admin action: ${action} on ${target}`,
      {
        source: 'admin_monitor',
        user,
        action,
        target,
        success
      }
    );
  }

  // Get client IP from request
  getClientIP(req) {
    return (
      req.headers['x-forwarded-for']?.split(',')[0] ||
      req.headers['x-real-ip'] ||
      req.connection?.remoteAddress ||
      req.socket?.remoteAddress ||
      'unknown'
    );
  }

  // Start periodic security checks
  startPeriodicChecks() {
    // Check for suspicious patterns every minute
    setInterval(() => {
      this.analyzeSuspiciousPatterns();
    }, 60 * 1000);

    // Generate security summary every hour
    setInterval(() => {
      this.generateHourlySummary();
    }, 60 * 60 * 1000);

    // Cleanup old events daily
    setInterval(() => {
      this.cleanupOldEvents();
    }, 24 * 60 * 60 * 1000);
  }

  // Analyze events for suspicious patterns
  analyzeSuspiciousPatterns() {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    // Get events from last hour
    const recentEvents = this.events.filter(event => 
      now - new Date(event.timestamp).getTime() < oneHour
    );

    // Check for suspicious IP patterns
    this.checkSuspiciousIPs(recentEvents);
    
    // Check for brute force patterns
    this.checkBruteForcePatterns(recentEvents);
    
    // Check for anomalous user behavior
    this.checkAnomalousUserBehavior(recentEvents);
  }

  // Check for suspicious IP addresses
  checkSuspiciousIPs(events) {
    const ipCounts = new Map();
    
    events.forEach(event => {
      if (event.metadata.ip) {
        const ip = event.metadata.ip;
        if (!ipCounts.has(ip)) ipCounts.set(ip, 0);
        ipCounts.set(ip, ipCounts.get(ip) + 1);
      }
    });

    // Alert on IPs with high event counts
    ipCounts.forEach((count, ip) => {
      if (count > 50) { // Threshold for suspicious activity
        this.logEvent(
          'SUSPICIOUS_IP_ACTIVITY',
          'HIGH',
          `IP ${ip} generated ${count} security events in the last hour`,
          { source: 'pattern_analyzer', ip, eventCount: count }
        );
      }
    });
  }

  // Check for brute force attack patterns
  checkBruteForcePatterns(events) {
    const authFailures = events.filter(e => e.type === 'FAILED_AUTHENTICATION');
    const ipFailures = new Map();
    
    authFailures.forEach(event => {
      const ip = event.metadata.ip;
      if (!ipFailures.has(ip)) ipFailures.set(ip, 0);
      ipFailures.set(ip, ipFailures.get(ip) + 1);
    });

    ipFailures.forEach((count, ip) => {
      if (count >= 10) { // Brute force threshold
        this.logEvent(
          'BRUTE_FORCE_ATTACK',
          'CRITICAL',
          `Brute force attack detected from ${ip} (${count} failed attempts)`,
          { source: 'brute_force_detector', ip, attemptCount: count }
        );
      }
    });
  }

  // Check for anomalous user behavior
  checkAnomalousUserBehavior(events) {
    const userActions = new Map();
    
    events.forEach(event => {
      if (event.metadata.user && event.metadata.user !== 'anonymous') {
        const user = event.metadata.user;
        if (!userActions.has(user)) userActions.set(user, []);
        userActions.get(user).push(event);
      }
    });

    userActions.forEach((actions, user) => {
      // Check for rapid successive admin actions
      const adminActions = actions.filter(a => a.type === 'ADMIN_ACTION');
      if (adminActions.length > 20) {
        this.logEvent(
          'ANOMALOUS_USER_BEHAVIOR',
          'MEDIUM',
          `User ${user} performed ${adminActions.length} admin actions in one hour`,
          { source: 'behavior_analyzer', user, actionCount: adminActions.length }
        );
      }
    });
  }

  // Generate hourly security summary
  generateHourlySummary() {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    
    const recentEvents = this.events.filter(event => 
      now - new Date(event.timestamp).getTime() < oneHour
    );

    if (recentEvents.length === 0) return;

    const summary = {
      totalEvents: recentEvents.length,
      severityBreakdown: {
        critical: recentEvents.filter(e => e.severity === 'CRITICAL').length,
        high: recentEvents.filter(e => e.severity === 'HIGH').length,
        medium: recentEvents.filter(e => e.severity === 'MEDIUM').length,
        low: recentEvents.filter(e => e.severity === 'LOW').length
      },
      topEventTypes: this.getTopEventTypes(recentEvents),
      uniqueIPs: new Set(recentEvents.map(e => e.metadata.ip).filter(Boolean)).size
    };

    console.log('\n📊 Hourly Security Summary');
    console.log('─'.repeat(30));
    console.log(`Total Events: ${summary.totalEvents}`);
    console.log(`Critical: ${summary.severityBreakdown.critical}`);
    console.log(`High: ${summary.severityBreakdown.high}`);
    console.log(`Medium: ${summary.severityBreakdown.medium}`);
    console.log(`Low: ${summary.severityBreakdown.low}`);
    console.log(`Unique IPs: ${summary.uniqueIPs}`);
    console.log('Top Event Types:', summary.topEventTypes.slice(0, 3).join(', '));
  }

  // Get top event types
  getTopEventTypes(events) {
    const typeCounts = new Map();
    
    events.forEach(event => {
      if (!typeCounts.has(event.type)) typeCounts.set(event.type, 0);
      typeCounts.set(event.type, typeCounts.get(event.type) + 1);
    });

    return Array.from(typeCounts.entries())
      .sort(([,a], [,b]) => b - a)
      .map(([type]) => type);
  }

  // Cleanup old events to prevent memory issues
  cleanupOldEvents() {
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    
    const initialCount = this.events.length;
    this.events = this.events.filter(event => 
      now - new Date(event.timestamp).getTime() < sevenDays
    );
    
    const cleaned = initialCount - this.events.length;
    if (cleaned > 0) {
      console.log(`🧹 Cleaned up ${cleaned} old security events`);
    }
  }

  // Get security statistics
  getStats() {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    
    const recentEvents = this.events.filter(event => 
      now - new Date(event.timestamp).getTime() < oneDay
    );

    return {
      totalEvents: this.events.length,
      recentEvents: recentEvents.length,
      severityBreakdown: {
        critical: recentEvents.filter(e => e.severity === 'CRITICAL').length,
        high: recentEvents.filter(e => e.severity === 'HIGH').length,
        medium: recentEvents.filter(e => e.severity === 'MEDIUM').length,
        low: recentEvents.filter(e => e.severity === 'LOW').length
      }
    };
  }

  // Stop monitoring
  stop() {
    console.log('🔒 Security Monitor stopping...');
    // Clear any intervals if we stored references to them
  }
}

// Express middleware for automatic monitoring
function createSecurityMiddleware(monitor) {
  return (req, res, next) => {
    // Monitor suspicious request patterns
    const suspiciousPatterns = [
      /\b(union|select|insert|delete|drop|script|javascript|vbscript)\b/i,
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi
    ];

    // Check query parameters and body for suspicious content
    const checkPayload = (obj) => {
      if (!obj) return;
      
      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'string') {
          suspiciousPatterns.forEach(pattern => {
            if (pattern.test(value)) {
              monitor.monitorSuspiciousRequest(req, `Suspicious content in ${key}: ${pattern}`);
            }
          });
        }
      });
    };

    checkPayload(req.query);
    checkPayload(req.body);

    // Continue to next middleware
    next();
  };
}

// Export the SecurityMonitor class and middleware
module.exports = {
  SecurityMonitor,
  createSecurityMiddleware
};

// Command line usage
if (require.main === module) {
  const monitor = new SecurityMonitor({
    logFile: 'security/security-events.log'
  });

  // Example usage
  console.log('🔒 Security Monitor Demo');
  
  // Simulate some security events
  setTimeout(() => {
    monitor.logEvent('FAILED_AUTHENTICATION', 'MEDIUM', 'Demo failed auth', { ip: '192.168.1.100' });
  }, 1000);

  setTimeout(() => {
    monitor.logEvent('SQL_INJECTION_ATTEMPT', 'CRITICAL', 'Demo SQL injection', { ip: '192.168.1.100' });
  }, 2000);

  setTimeout(() => {
    console.log('\nCurrent Stats:', monitor.getStats());
  }, 3000);

  // Keep running for demo
  setTimeout(() => {
    monitor.stop();
    process.exit(0);
  }, 10000);
}