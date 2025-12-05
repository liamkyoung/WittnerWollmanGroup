#!/usr/bin/env node

/**
 * Security Report Generator
 * Combines vulnerability scan and dependency audit results into comprehensive report
 */

const fs = require('fs');
const path = require('path');

class SecurityReportGenerator {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.reportData = {
      executiveSummary: {},
      vulnerabilities: {
        codeVulnerabilities: [],
        dependencyVulnerabilities: [],
        configurationIssues: []
      },
      remediation: {
        critical: [],
        high: [],
        medium: [],
        low: []
      },
      securityMetrics: {},
      recommendations: []
    };
  }

  // Load scan results
  loadScanResults() {
    try {
      // Load vulnerability scan results
      const vulnScanPath = path.join(this.projectRoot, 'security-scan-report.json');
      if (fs.existsSync(vulnScanPath)) {
        const vulnScanData = JSON.parse(fs.readFileSync(vulnScanPath, 'utf8'));
        this.reportData.vulnerabilities.codeVulnerabilities = vulnScanData.vulnerabilities || [];
      }

      // Load dependency audit results
      const depAuditPath = path.join(this.projectRoot, 'dependency-audit-report.json');
      if (fs.existsSync(depAuditPath)) {
        const depAuditData = JSON.parse(fs.readFileSync(depAuditPath, 'utf8'));
        this.reportData.vulnerabilities.dependencyVulnerabilities = depAuditData.vulnerabilities || [];
      }

    } catch (error) {
      console.error('Error loading scan results:', error.message);
    }
  }

  // Calculate security metrics
  calculateSecurityMetrics() {
    const allVulns = [
      ...this.reportData.vulnerabilities.codeVulnerabilities,
      ...this.reportData.vulnerabilities.dependencyVulnerabilities
    ];

    const severityCounts = {
      critical: allVulns.filter(v => v.severity === 'CRITICAL').length,
      high: allVulns.filter(v => v.severity === 'HIGH').length,
      medium: allVulns.filter(v => v.severity === 'MEDIUM').length,
      low: allVulns.filter(v => v.severity === 'LOW').length
    };

    const totalVulns = allVulns.length;
    const riskScore = this.calculateRiskScore(severityCounts);

    this.reportData.securityMetrics = {
      totalVulnerabilities: totalVulns,
      severityBreakdown: severityCounts,
      riskScore: riskScore,
      securityGrade: this.getSecurityGrade(riskScore),
      codeVulnerabilities: this.reportData.vulnerabilities.codeVulnerabilities.length,
      dependencyVulnerabilities: this.reportData.vulnerabilities.dependencyVulnerabilities.length
    };
  }

  // Calculate overall risk score (0-100)
  calculateRiskScore(severityCounts) {
    const weights = { critical: 10, high: 7, medium: 4, low: 1 };
    const weightedScore = (
      severityCounts.critical * weights.critical +
      severityCounts.high * weights.high +
      severityCounts.medium * weights.medium +
      severityCounts.low * weights.low
    );
    
    // Normalize to 0-100 scale (assuming max of 500 points)
    return Math.min(100, (weightedScore / 5));
  }

  // Get security grade based on risk score
  getSecurityGrade(riskScore) {
    if (riskScore >= 80) return 'F';
    if (riskScore >= 60) return 'D';
    if (riskScore >= 40) return 'C';
    if (riskScore >= 20) return 'B';
    return 'A';
  }

  // Generate executive summary
  generateExecutiveSummary() {
    const metrics = this.reportData.securityMetrics;
    
    this.reportData.executiveSummary = {
      overview: `Security assessment identified ${metrics.totalVulnerabilities} total vulnerabilities with a risk score of ${metrics.riskScore.toFixed(1)}/100 (Grade ${metrics.securityGrade}).`,
      criticalFindings: metrics.severityBreakdown.critical,
      highRiskFindings: metrics.severityBreakdown.high,
      primaryRisks: this.identifyPrimaryRisks(),
      immediateActions: this.getImmediateActions(),
      complianceStatus: this.assessCompliance()
    };
  }

  // Identify primary risk categories
  identifyPrimaryRisks() {
    const risks = [];
    const allVulns = [
      ...this.reportData.vulnerabilities.codeVulnerabilities,
      ...this.reportData.vulnerabilities.dependencyVulnerabilities
    ];

    // Group by vulnerability type
    const typeGroups = {};
    allVulns.forEach(vuln => {
      if (!typeGroups[vuln.type]) typeGroups[vuln.type] = 0;
      typeGroups[vuln.type]++;
    });

    // Identify top risk categories
    Object.entries(typeGroups)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .forEach(([type, count]) => {
        risks.push(`${type}: ${count} findings`);
      });

    return risks;
  }

  // Get immediate actions required
  getImmediateActions() {
    const actions = [];
    const criticalVulns = [
      ...this.reportData.vulnerabilities.codeVulnerabilities,
      ...this.reportData.vulnerabilities.dependencyVulnerabilities
    ].filter(v => v.severity === 'CRITICAL');

    if (criticalVulns.length > 0) {
      actions.push(`Address ${criticalVulns.length} critical vulnerabilities immediately`);
    }

    // Check for specific high-priority issues
    const secretExposure = criticalVulns.find(v => v.type === 'SECRET_EXPOSURE');
    if (secretExposure) {
      actions.push('Rotate exposed credentials and API keys');
    }

    const sqlInjection = criticalVulns.find(v => v.type === 'SQL_INJECTION');
    if (sqlInjection) {
      actions.push('Fix SQL injection vulnerabilities to prevent data breaches');
    }

    if (actions.length === 0) {
      actions.push('Review and address high and medium severity findings');
    }

    return actions;
  }

  // Assess compliance status
  assessCompliance() {
    const metrics = this.reportData.securityMetrics;
    const status = {
      owasp: 'PARTIAL',
      gdpr: 'NEEDS_REVIEW',
      pci: 'NON_COMPLIANT'
    };

    // Basic compliance assessment
    if (metrics.severityBreakdown.critical === 0 && metrics.severityBreakdown.high <= 2) {
      status.owasp = 'COMPLIANT';
    }

    if (metrics.severityBreakdown.critical === 0) {
      status.gdpr = 'COMPLIANT';
    }

    return status;
  }

  // Generate remediation plan
  generateRemediationPlan() {
    const allVulns = [
      ...this.reportData.vulnerabilities.codeVulnerabilities,
      ...this.reportData.vulnerabilities.dependencyVulnerabilities
    ];

    // Group by severity
    ['critical', 'high', 'medium', 'low'].forEach(severity => {
      const severityVulns = allVulns.filter(v => v.severity === severity.toUpperCase());
      
      this.reportData.remediation[severity] = severityVulns.map(vuln => ({
        id: vuln.id || `${vuln.type}_${Date.now()}`,
        type: vuln.type,
        description: vuln.description,
        location: vuln.file || vuln.package || 'Multiple locations',
        recommendation: vuln.recommendation,
        effort: this.estimateEffort(vuln),
        timeline: this.getTimeline(severity)
      }));
    });
  }

  // Estimate remediation effort
  estimateEffort(vuln) {
    const effortMap = {
      'SECRET_EXPOSURE': 'Medium',
      'SQL_INJECTION': 'High',
      'XSS': 'Medium',
      'DEPENDENCY_VULNERABILITY': 'Low',
      'MISSING_VALIDATION': 'Medium',
      'INSECURE_CSP': 'Low',
      'INFO_DISCLOSURE': 'Low'
    };
    
    return effortMap[vuln.type] || 'Medium';
  }

  // Get recommended timeline
  getTimeline(severity) {
    const timelineMap = {
      'critical': 'Immediate (24-48 hours)',
      'high': 'Within 1 week',
      'medium': 'Within 1 month',
      'low': 'Within 3 months'
    };
    
    return timelineMap[severity] || 'As time permits';
  }

  // Generate security recommendations
  generateRecommendations() {
    this.reportData.recommendations = [
      {
        category: 'Input Validation',
        priority: 'High',
        description: 'Implement comprehensive input validation for all API endpoints',
        implementation: 'Use validation libraries like Joi or Zod for all user inputs'
      },
      {
        category: 'Dependency Management',
        priority: 'High',
        description: 'Establish regular dependency update and security scanning process',
        implementation: 'Schedule weekly npm audit runs and monthly dependency updates'
      },
      {
        category: 'Secrets Management',
        priority: 'Critical',
        description: 'Implement proper secrets management system',
        implementation: 'Use environment variables and consider HashiCorp Vault or similar'
      },
      {
        category: 'Content Security Policy',
        priority: 'Medium',
        description: 'Strengthen CSP to prevent XSS attacks',
        implementation: 'Remove unsafe-inline and unsafe-eval directives'
      },
      {
        category: 'Access Controls',
        priority: 'Medium',
        description: 'Review and strengthen authorization controls',
        implementation: 'Implement principle of least privilege for all resources'
      },
      {
        category: 'Security Headers',
        priority: 'Medium',
        description: 'Implement comprehensive security headers',
        implementation: 'Add HSTS, X-Frame-Options, X-Content-Type-Options headers'
      },
      {
        category: 'Monitoring',
        priority: 'Medium',
        description: 'Implement security monitoring and alerting',
        implementation: 'Set up log monitoring for security events and failed authentications'
      }
    ];
  }

  // Generate the complete report
  async generateReport() {
    console.log('📊 Generating comprehensive security report...');
    
    this.loadScanResults();
    this.calculateSecurityMetrics();
    this.generateExecutiveSummary();
    this.generateRemediationPlan();
    this.generateRecommendations();

    const report = {
      metadata: {
        reportDate: new Date().toISOString(),
        projectName: 'Wittner Wollman Group Real Estate Platform',
        technology: 'Next.js / PayloadCMS / PostgreSQL / TailwindCSS',
        scanVersion: '1.0.0'
      },
      ...this.reportData
    };

    // Save detailed JSON report
    const jsonReportPath = path.join(this.projectRoot, 'security-comprehensive-report.json');
    fs.writeFileSync(jsonReportPath, JSON.stringify(report, null, 2));

    // Generate human-readable markdown report
    const markdownReport = this.generateMarkdownReport(report);
    const mdReportPath = path.join(this.projectRoot, 'SECURITY-REPORT.md');
    fs.writeFileSync(mdReportPath, markdownReport);

    console.log('✅ Security report generated successfully!');
    console.log(`📄 JSON Report: ${jsonReportPath}`);
    console.log(`📝 Markdown Report: ${mdReportPath}`);
    
    // Print summary
    this.printSummary(report);
    
    return report;
  }

  // Generate markdown report
  generateMarkdownReport(report) {
    const { metadata, executiveSummary, securityMetrics, remediation, recommendations } = report;
    
    return `# Security Assessment Report

## Project Information
- **Project:** ${metadata.projectName}
- **Technology Stack:** ${metadata.technology}
- **Report Date:** ${new Date(metadata.reportDate).toLocaleDateString()}
- **Security Grade:** ${securityMetrics.securityGrade}
- **Risk Score:** ${securityMetrics.riskScore.toFixed(1)}/100

## Executive Summary

${executiveSummary.overview}

### Key Findings
- **Critical Vulnerabilities:** ${executiveSummary.criticalFindings}
- **High Risk Vulnerabilities:** ${executiveSummary.highRiskFindings}
- **Total Vulnerabilities:** ${securityMetrics.totalVulnerabilities}

### Primary Risk Categories
${executiveSummary.primaryRisks.map(risk => `- ${risk}`).join('\n')}

### Immediate Actions Required
${executiveSummary.immediateActions.map(action => `1. ${action}`).join('\n')}

## Vulnerability Breakdown

### By Severity
- **Critical:** ${securityMetrics.severityBreakdown.critical}
- **High:** ${securityMetrics.severityBreakdown.high}
- **Medium:** ${securityMetrics.severityBreakdown.medium}
- **Low:** ${securityMetrics.severityBreakdown.low}

### By Source
- **Code Vulnerabilities:** ${securityMetrics.codeVulnerabilities}
- **Dependency Vulnerabilities:** ${securityMetrics.dependencyVulnerabilities}

## Remediation Plan

### Critical Priority (Immediate)
${this.formatRemediationItems(remediation.critical)}

### High Priority (Within 1 Week)
${this.formatRemediationItems(remediation.high)}

### Medium Priority (Within 1 Month)
${this.formatRemediationItems(remediation.medium)}

### Low Priority (Within 3 Months)
${this.formatRemediationItems(remediation.low)}

## Security Recommendations

${recommendations.map(rec => `
### ${rec.category} (${rec.priority} Priority)
**Description:** ${rec.description}
**Implementation:** ${rec.implementation}
`).join('\n')}

## Compliance Status
- **OWASP Top 10:** ${executiveSummary.complianceStatus.owasp}
- **GDPR:** ${executiveSummary.complianceStatus.gdpr}
- **PCI DSS:** ${executiveSummary.complianceStatus.pci}

## Next Steps
1. Address critical and high severity vulnerabilities immediately
2. Implement recommended security controls
3. Establish regular security scanning process
4. Conduct security awareness training for development team
5. Schedule follow-up security assessment in 3 months

---
*This report was generated automatically by the Security Assessment Tool v${metadata.scanVersion}*
`;
  }

  // Format remediation items for markdown
  formatRemediationItems(items) {
    if (items.length === 0) return 'No items in this category.';
    
    return items.map(item => `
**${item.type}** - ${item.description}
- **Location:** ${item.location}
- **Recommendation:** ${item.recommendation}
- **Effort:** ${item.effort}
`).join('\n');
  }

  // Print summary to console
  printSummary(report) {
    const { securityMetrics, executiveSummary } = report;
    
    console.log('\n🏆 SECURITY ASSESSMENT SUMMARY');
    console.log('═'.repeat(50));
    console.log(`Security Grade: ${securityMetrics.securityGrade}`);
    console.log(`Risk Score: ${securityMetrics.riskScore.toFixed(1)}/100`);
    console.log(`Total Vulnerabilities: ${securityMetrics.totalVulnerabilities}`);
    console.log('');
    console.log('Severity Breakdown:');
    console.log(`  Critical: ${securityMetrics.severityBreakdown.critical}`);
    console.log(`  High: ${securityMetrics.severityBreakdown.high}`);
    console.log(`  Medium: ${securityMetrics.severityBreakdown.medium}`);
    console.log(`  Low: ${securityMetrics.severityBreakdown.low}`);
    console.log('');
    if (executiveSummary.immediateActions.length > 0) {
      console.log('🚨 IMMEDIATE ACTIONS REQUIRED:');
      executiveSummary.immediateActions.forEach(action => console.log(`  • ${action}`));
    }
    console.log('');
  }
}

// Export for use as module
module.exports = SecurityReportGenerator;

// Command line usage
if (require.main === module) {
  const generator = new SecurityReportGenerator(process.argv[2] || '.');
  generator.generateReport().catch(console.error);
}