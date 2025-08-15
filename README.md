# 🏢 Wittner Wollman Group Website

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com/)
[![DigitalOcean](https://img.shields.io/badge/DigitalOcean-0080FF?style=flat-square&logo=digitalocean&logoColor=white)](https://digitalocean.com/)
[![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)](https://nginx.org/)

> Professional corporate website built with Next.js, featuring secure deployment on DigitalOcean with Docker containerization and SSL encryption.

## 🌟 Overview

Corporate website for Wittner Wollman Group, featuring modern web technologies, secure content delivery, and professional presentation. The application is containerized with Docker and deployed on DigitalOcean infrastructure with comprehensive security headers and SSL certification.

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with TypeScript
- **Content Management**: Payload CMS
- **Database**: PostgreSQL (DigitalOcean Managed Database)
- **Storage**: DigitalOcean Spaces (S3-compatible)
- **Deployment**: Docker containers on DigitalOcean Droplets
- **Web Server**: Nginx with SSL/TLS encryption
- **SSL**: Let's Encrypt certificates via Certbot

## 🏗️ Infrastructure Architecture

### DigitalOcean Services
- **Droplet**: Ubuntu/Debian server hosting the application
- **Managed Database**: PostgreSQL cluster for data persistence
- **Spaces**: S3-compatible object storage for assets and media files
- **DNS**: Domain management with A record configuration

### Security Features
- SSL/TLS encryption with automatic certificate renewal
- Content Security Policy (CSP) headers with nonce-based protection
- CORS configuration for secure cross-origin requests
- Secure proxy configuration with Nginx

## 🚀 Deployment Guide

### Initial Infrastructure Setup

1. **Create DigitalOcean Resources**
   ```bash
   # Create Ubuntu/Debian Droplet
   # Create PostgreSQL Database Cluster
   # Create Spaces bucket for asset storage
   ```

2. **DNS Configuration**
   - Configure A record: `Host: @`, `Type: A`, `IP: [droplet_ip]`
   - Update domain DNS settings in registrar

3. **Server Preparation**
   ```bash
   sudo apt-get update
   sudo apt install nginx
   ```

### SSL Certificate Setup

Follow the [DigitalOcean Let's Encrypt guide](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Docker Deployment

1. **Install Docker**
   ```bash
   # Follow official Docker installation guide
   curl -fsSL https://get.docker.com -o get-docker.sh
   sh get-docker.sh
   ```

2. **Deploy Application**
   ```bash
   # Pull latest image
   docker pull liamyoung/ww-webapp:latest
   
   # Run with environment configuration
   docker run --env-file .env -p '3000:3000' liamyoung/ww-webapp:latest
   ```

## 🔧 Development Workflow

### Environment Configuration

Create `.env` file with production settings:
```bash
NEXT_PUBLIC_URL=https://yourdomain.com
PAYLOAD_PUBLIC_SERVER_URL=https://yourdomain.com
DATABASE_URI=postgresql://[credentials]
SPACES_ACCESS_KEY=[digitalocean_spaces_key]
SPACES_SECRET_KEY=[digitalocean_spaces_secret]
```

### Building for Production

```bash
# Build Docker image for production
docker build -t liamyoung/ww-webapp:[version] --platform linux/amd64 .

# Push to Docker Hub
docker push liamyoung/ww-webapp:[version]

# Deploy on server
docker pull liamyoung/ww-webapp:[version]
docker run --env-file .env -p '3000:3000' liamyoung/ww-webapp:[version]
```

### Database Migrations

```bash
# For production database updates:
# 1. Export current production database using pgAdmin
# 2. Create local development database
# 3. Apply migrations locally and test
# 4. Deploy migrations to production during maintenance window
```

## ⚙️ Nginx Configuration

The application uses a comprehensive Nginx configuration with security headers:

```nginx
# =================================================================
# NGINX Configuration for Multi-Domain Setup
# Supports: Main website, Blog (WordPress), Database Admin
# Features: SSL/TLS, CSP headers, www→non-www redirects
# =================================================================

# =================================================================
# BLOG SUBDOMAIN (WordPress)
# =================================================================

# HTTP to HTTPS redirect for blog
server {
    listen 80;
    server_name blog.example.com;
    return 301 https://blog.example.com$request_uri;
}

# HTTPS blog server
server {
    listen 443 ssl http2;
    server_name blog.example.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    # Upload limit for WordPress
    client_max_body_size 64M;
    
    # Proxy to WordPress container/service
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port 443;
    }
}

# =================================================================
# DATABASE ADMIN SUBDOMAIN (phpMyAdmin/Adminer)
# =================================================================

# HTTP to HTTPS redirect for database admin
server {
    listen 80;
    server_name db.example.com;
    return 301 https://db.example.com$request_uri;
}

# HTTPS database admin server
server {
    listen 443 ssl http2;
    server_name db.example.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    # Security: Enable basic auth for database access
    # Uncomment and configure as needed
    # auth_basic "Database Administration";
    # auth_basic_user_file /etc/nginx/.htpasswd;
    
    # Additional security headers for admin interface
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    
    location / {
        proxy_pass http://127.0.0.1:8081/;
        include proxy_params;
        
        # Additional security for admin interface
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# =================================================================
# MAIN WEBSITE
# =================================================================

# HTTP to HTTPS redirect (handles both www and non-www)
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://example.com$request_uri;
}

# HTTPS main server (handles both www and non-www)
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    # Redirect www to non-www over HTTPS
    if ($host = www.example.com) {
        return 301 https://example.com$request_uri;
    }
    
    # Upload limits
    client_max_body_size 100M;
    
    # Security Headers
    add_header X-Frame-Options SAMEORIGIN;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";
    
    # Content Security Policy
    add_header Content-Security-Policy "
        default-src 'self' https://your-cdn.example.com;
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.googletagmanager.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://your-cdn.example.com data:;
        font-src 'self' https://fonts.gstatic.com;
        frame-src 'self' https://www.youtube.com;
        connect-src 'self' https://maps.googleapis.com https://www.googletagmanager.com;
        script-src-elem 'self' https://www.googletagmanager.com https://maps.googleapis.com;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
    ";
    
    # Main application proxy
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # CORS headers (adjust as needed for your application)
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'Authorization, Content-Type';
        
        # Handle preflight requests
        if ($request_method = OPTIONS) {
            return 204;
        }
    }
    
    # Admin interface (if applicable)
    location /admin {
        proxy_pass http://localhost:3000/admin;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Additional security for admin routes
        # Uncomment to restrict admin access by IP
        # allow 192.168.1.0/24;
        # allow 10.0.0.0/8;
        # deny all;
    }
    
    # Static assets optimization (optional)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
    }
}

# =================================================================
# GENERAL SECURITY CONFIGURATIONS
# =================================================================

# Hide nginx version
server_tokens off;

# Rate limiting (uncomment and adjust as needed)
# limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
# limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;

# Example rate limiting usage:
# location /api/ {
#     limit_req zone=api burst=20 nodelay;
#     proxy_pass http://localhost:3000;
# }

# Example for login endpoints:
# location /admin/login {
#     limit_req zone=login burst=5 nodelay;
#     proxy_pass http://localhost:3000;
# }
```

## 🐛 Troubleshooting

### Common Issues and Solutions

**Prerendering Errors**
- Ensure `NODE_ENV=production` for production builds
- Avoid `NODE_ENV=development` in production (causes CSP errors)
- Use domain name (not localhost) in production environment variables

**Build Issues**
- Use `yarn` instead of `npm` to avoid Drizzle ORM/Payload version conflicts
- Ensure all environment variables are consistent across Docker, local, and production
- Build is required to see changes in production (dev mode may not work properly)

**Performance Issues**
- Monitor for high CPU usage with background processes
- Avoid running unnecessary PM2 processes that may cause resource conflicts

### Environment Variables Checklist

- [ ] `NEXT_PUBLIC_URL` points to production domain
- [ ] `PAYLOAD_PUBLIC_SERVER_URL` matches production URL
- [ ] Database connection strings are correct
- [ ] DigitalOcean Spaces credentials are set
- [ ] SSL certificates are valid and auto-renewing

## 📈 Monitoring and Maintenance

- **SSL Certificates**: Automatic renewal via Certbot
- **Docker Images**: Regular updates with version tagging
- **Database**: Managed backups through DigitalOcean
- **Storage**: Asset optimization and CDN delivery via Spaces
- **Security**: Regular dependency updates and security header validation

---

**Built for professional corporate presence with enterprise-grade security and performance.**