#!/bin/bash

# Security Monitoring and Assessment Script
# Runs comprehensive security checks on the application

set -e

echo "🔒 Starting Security Assessment Suite"
echo "===================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js to run security checks."
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm to run security checks."
    exit 1
fi

# Create security directory if it doesn't exist
mkdir -p security/reports
mkdir -p security/logs

print_status "Starting vulnerability scan..."
if node security/vulnerability-scanner.js . > security/logs/vulnerability-scan.log 2>&1; then
    print_success "Vulnerability scan completed"
else
    print_warning "Vulnerability scan completed with warnings"
fi

print_status "Starting dependency audit..."
if node security/dependency-audit.js . > security/logs/dependency-audit.log 2>&1; then
    print_success "Dependency audit completed"
else
    print_warning "Dependency audit found issues"
fi

print_status "Generating comprehensive security report..."
if node security/generate-security-report.js . > security/logs/report-generation.log 2>&1; then
    print_success "Security report generated"
else
    print_error "Failed to generate security report"
    exit 1
fi

print_status "Running npm audit..."
if npm audit --audit-level=moderate > security/reports/npm-audit.txt 2>&1; then
    print_success "npm audit completed with no issues"
else
    print_warning "npm audit found vulnerabilities - check security/reports/npm-audit.txt"
fi

print_status "Checking for secrets in git history..."
if command -v git &> /dev/null && [ -d .git ]; then
    # Basic check for common secret patterns in git history
    if git log --all --full-history -- "*.env*" "*.key" "*.pem" "*.p12" "*.pfx" > security/reports/secret-files-in-git.txt 2>&1; then
        if [ -s security/reports/secret-files-in-git.txt ]; then
            print_warning "Found references to potential secret files in git history"
        else
            print_success "No obvious secret files found in git history"
        fi
    fi
else
    print_warning "Not a git repository or git not installed - skipping git history check"
fi

print_status "Checking file permissions..."
# Check for overly permissive files
find . -type f \( -name "*.env*" -o -name "*.key" -o -name "*.pem" \) -perm /044 > security/reports/permissive-files.txt 2>/dev/null || true
if [ -s security/reports/permissive-files.txt ]; then
    print_warning "Found files with overly permissive permissions"
    cat security/reports/permissive-files.txt
else
    print_success "File permissions look secure"
fi

print_status "Checking for hardcoded secrets..."
# Use grep to find common secret patterns
{
    echo "=== Searching for potential hardcoded secrets ==="
    echo "API Keys:"
    grep -r -i "api[_-]key\s*[:=]\s*['\"][^'\"]\{16,\}['\"]" . --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude-dir=.next || echo "None found"
    
    echo -e "\nPasswords:"
    grep -r -i "password\s*[:=]\s*['\"][^'\"]\{8,\}['\"]" . --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude-dir=.next || echo "None found"
    
    echo -e "\nPrivate Keys:"
    grep -r "-----BEGIN.*PRIVATE KEY-----" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude-dir=.next || echo "None found"
    
    echo -e "\nJWT Tokens:"
    grep -r "eyJ[A-Za-z0-9_-]*\." . --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude-dir=.next || echo "None found"
} > security/reports/hardcoded-secrets.txt 2>&1

if grep -q "-----BEGIN.*PRIVATE KEY-----\|api[_-]key.*[a-zA-Z0-9]\{16,\}" security/reports/hardcoded-secrets.txt; then
    print_error "Found potential hardcoded secrets! Check security/reports/hardcoded-secrets.txt"
else
    print_success "No obvious hardcoded secrets found"
fi

print_status "Checking SSL/TLS configuration..."
# Check if HTTPS is enforced
if grep -r "https://" next.config.js package.json 2>/dev/null | grep -q "https"; then
    print_success "HTTPS configuration found"
else
    print_warning "No HTTPS configuration detected"
fi

print_status "Analyzing security headers..."
# Check for security headers in next.config.js
{
    echo "=== Security Headers Analysis ==="
    if [ -f "next.config.js" ]; then
        echo "Checking next.config.js for security headers..."
        if grep -q "Content-Security-Policy\|X-Frame-Options\|X-Content-Type-Options" next.config.js; then
            echo "✓ Security headers found in next.config.js"
        else
            echo "⚠ No security headers found in next.config.js"
        fi
    fi
    
    if [ -f "csp.js" ]; then
        echo "Checking CSP configuration..."
        if grep -q "unsafe-inline\|unsafe-eval" csp.js; then
            echo "⚠ CSP contains unsafe directives"
        else
            echo "✓ CSP configuration looks secure"
        fi
    fi
} > security/reports/security-headers.txt

print_status "Creating security summary..."
{
    echo "Security Assessment Summary"
    echo "=========================="
    echo "Date: $(date)"
    echo "Project: $(basename $(pwd))"
    echo ""
    
    if [ -f "SECURITY-REPORT.md" ]; then
        echo "📊 Detailed report available in SECURITY-REPORT.md"
        echo ""
        
        # Extract key metrics from the report
        if grep -q "Risk Score:" SECURITY-REPORT.md; then
            echo "Key Metrics:"
            grep "Risk Score:\|Security Grade:\|Total Vulnerabilities:" SECURITY-REPORT.md | head -3
            echo ""
        fi
        
        if grep -q "Critical:" SECURITY-REPORT.md; then
            echo "Vulnerability Breakdown:"
            grep -A4 "### By Severity" SECURITY-REPORT.md | tail -4
            echo ""
        fi
        
        if grep -q "IMMEDIATE ACTIONS REQUIRED" SECURITY-REPORT.md; then
            echo "🚨 IMMEDIATE ACTIONS REQUIRED:"
            grep -A10 "### Immediate Actions Required" SECURITY-REPORT.md | tail -n +2 | head -5
        fi
    fi
    
    echo ""
    echo "📁 Additional reports available in security/reports/"
    echo "📝 Logs available in security/logs/"
    
} > security/SECURITY-SUMMARY.txt

print_success "Security assessment completed!"
echo ""
echo "📊 Results Summary:"
echo "==================="

if [ -f "security/SECURITY-SUMMARY.txt" ]; then
    cat security/SECURITY-SUMMARY.txt
fi

echo ""
echo "📁 Generated Files:"
echo "  • SECURITY-REPORT.md - Comprehensive security report"
echo "  • security-comprehensive-report.json - Detailed JSON report"
echo "  • security/SECURITY-SUMMARY.txt - Quick summary"
echo "  • security/reports/ - Individual scan reports"
echo "  • security/logs/ - Scan execution logs"

echo ""
print_status "Next Steps:"
echo "1. Review the SECURITY-REPORT.md file"
echo "2. Address critical and high severity issues immediately"
echo "3. Schedule regular security scans (weekly recommended)"
echo "4. Set up monitoring using security/security-monitor.js"

# Check if this should fail CI
if [ -f "SECURITY-REPORT.md" ] && grep -q "Critical: [1-9]" SECURITY-REPORT.md; then
    print_error "Critical vulnerabilities found! Consider failing CI/CD pipeline."
    exit 1
fi

print_success "Security assessment completed successfully!"