#!/usr/bin/env node

/**
 * Dependency Security Audit Tool
 * Checks for known vulnerabilities in npm packages
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DependencyAuditor {
  constructor(projectRoot) {
    this.projectRoot = projectRoot;
    this.packageJsonPath = path.join(projectRoot, 'package.json');
    this.yarnLockPath = path.join(projectRoot, 'yarn.lock');
    this.vulnerabilities = [];
  }

  // Run npm audit and parse results
  async runNpmAudit() {
    try {
      console.log('🔍 Running npm audit...');
      const auditResult = execSync('npm audit --json', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditResult);
      this.parseNpmAuditResults(auditData);
      
    } catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities found
      if (error.stdout) {
        try {
          const auditData = JSON.parse(error.stdout);
          this.parseNpmAuditResults(auditData);
        } catch (parseError) {
          console.error('Failed to parse npm audit results:', parseError.message);
        }
      } else {
        console.error('npm audit failed:', error.message);
      }
    }
  }

  // Parse npm audit JSON output
  parseNpmAuditResults(auditData) {
    if (auditData.vulnerabilities) {
      Object.entries(auditData.vulnerabilities).forEach(([packageName, vulnData]) => {
        if (vulnData.via && Array.isArray(vulnData.via)) {
          vulnData.via.forEach(via => {
            if (typeof via === 'object' && via.title) {
              this.vulnerabilities.push({
                type: 'DEPENDENCY_VULNERABILITY',
                package: packageName,
                severity: this.mapSeverity(via.severity),
                title: via.title,
                url: via.url,
                range: vulnData.range,
                fixAvailable: vulnData.fixAvailable,
                description: `Vulnerability in dependency: ${packageName}`,
                recommendation: vulnData.fixAvailable ? 'Update to fixed version' : 'Consider alternative package'
              });
            }
          });
        }
      });
    }
  }

  // Map npm audit severity to our scale
  mapSeverity(npmSeverity) {
    const mapping = {
      'critical': 'CRITICAL',
      'high': 'HIGH', 
      'moderate': 'MEDIUM',
      'low': 'LOW',
      'info': 'LOW'
    };
    return mapping[npmSeverity] || 'MEDIUM';
  }

  // Check for outdated packages
  async checkOutdatedPackages() {
    try {
      console.log('📦 Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedResult);
      this.parseOutdatedResults(outdatedData);
      
    } catch (error) {
      // npm outdated returns non-zero when packages are outdated
      if (error.stdout) {
        try {
          const outdatedData = JSON.parse(error.stdout);
          this.parseOutdatedResults(outdatedData);
        } catch (parseError) {
          console.log('No outdated packages or parsing failed');
        }
      }
    }
  }

  // Parse outdated package results
  parseOutdatedResults(outdatedData) {
    Object.entries(outdatedData).forEach(([packageName, packageInfo]) => {
      const majorVersionBehind = this.getMajorVersionDiff(
        packageInfo.current, 
        packageInfo.latest
      );

      if (majorVersionBehind > 0) {
        this.vulnerabilities.push({
          type: 'OUTDATED_DEPENDENCY',
          package: packageName,
          severity: majorVersionBehind >= 2 ? 'MEDIUM' : 'LOW',
          currentVersion: packageInfo.current,
          latestVersion: packageInfo.latest,
          description: `Package ${packageName} is ${majorVersionBehind} major version(s) behind`,
          recommendation: 'Update to latest version and test for breaking changes'
        });
      }
    });
  }

  // Calculate major version difference
  getMajorVersionDiff(current, latest) {
    const currentMajor = parseInt(current.split('.')[0]);
    const latestMajor = parseInt(latest.split('.')[0]);
    return latestMajor - currentMajor;
  }

  // Check for suspicious packages
  checkSuspiciousPackages() {
    console.log('🕵️ Checking for suspicious packages...');
    
    if (!fs.existsSync(this.packageJsonPath)) {
      console.error('package.json not found');
      return;
    }

    const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, 'utf8'));
    const allDependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies
    };

    // Check for typosquatting and suspicious patterns
    Object.keys(allDependencies).forEach(packageName => {
      // Check for common typosquatting patterns
      const suspiciousPatterns = [
        /^[a-z]+-js$/,  // package-js pattern
        /^node-/,       // node- prefix
        /^npm-/,        // npm- prefix
        /\d{4,}$/,      // ending with many numbers
        /[0O][0O]/,     // zero/O confusion
        /[il1]/,        // i/l/1 confusion
      ];

      suspiciousPatterns.forEach(pattern => {
        if (pattern.test(packageName)) {
          this.vulnerabilities.push({
            type: 'SUSPICIOUS_PACKAGE',
            package: packageName,
            severity: 'MEDIUM',
            description: `Package name matches suspicious pattern: ${pattern}`,
            recommendation: 'Verify package legitimacy and author reputation'
          });
        }
      });

      // Check for packages with very short names (possible typosquatting)
      if (packageName.length <= 2) {
        this.vulnerabilities.push({
          type: 'SUSPICIOUS_PACKAGE',
          package: packageName,
          severity: 'LOW',
          description: 'Very short package name may indicate typosquatting',
          recommendation: 'Verify package is legitimate and widely used'
        });
      }
    });
  }

  // Generate dependency audit report
  generateReport() {
    const report = {
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        severityBreakdown: {
          critical: this.vulnerabilities.filter(v => v.severity === 'CRITICAL').length,
          high: this.vulnerabilities.filter(v => v.severity === 'HIGH').length,
          medium: this.vulnerabilities.filter(v => v.severity === 'MEDIUM').length,
          low: this.vulnerabilities.filter(v => v.severity === 'LOW').length
        },
        typeBreakdown: {
          dependency: this.vulnerabilities.filter(v => v.type === 'DEPENDENCY_VULNERABILITY').length,
          outdated: this.vulnerabilities.filter(v => v.type === 'OUTDATED_DEPENDENCY').length,
          suspicious: this.vulnerabilities.filter(v => v.type === 'SUSPICIOUS_PACKAGE').length
        }
      },
      vulnerabilities: this.vulnerabilities.sort((a, b) => {
        const severityOrder = { 'CRITICAL': 4, 'HIGH': 3, 'MEDIUM': 2, 'LOW': 1 };
        return severityOrder[b.severity] - severityOrder[a.severity];
      }),
      auditDate: new Date().toISOString()
    };

    return report;
  }

  // Run complete dependency audit
  async audit() {
    console.log('🔒 Starting dependency security audit...');
    
    await this.runNpmAudit();
    await this.checkOutdatedPackages();
    this.checkSuspiciousPackages();
    
    const report = this.generateReport();
    
    console.log('\n📊 Dependency Audit Results:');
    console.log(`Total issues: ${report.summary.totalVulnerabilities}`);
    console.log(`Critical: ${report.summary.severityBreakdown.critical}`);
    console.log(`High: ${report.summary.severityBreakdown.high}`);
    console.log(`Medium: ${report.summary.severityBreakdown.medium}`);
    console.log(`Low: ${report.summary.severityBreakdown.low}`);
    
    return report;
  }
}

// Export for use as module
module.exports = DependencyAuditor;

// Command line usage
if (require.main === module) {
  const auditor = new DependencyAuditor(process.argv[2] || '.');
  auditor.audit().then(report => {
    // Save report to file
    const reportPath = path.join(process.cwd(), 'dependency-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);
  }).catch(console.error);
}