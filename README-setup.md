## Setup Documentation


### Digital Ocean Spaces
1. Create Droplet
2. Create DB Cluster -- 
3. Create Spaces -- S3 Storage

### Setup Prod Webserver
1. Create Ubuntu / Debian Droplet
2. List A Record on DNS for Squarespace
   - Host: @ | Type: A | IP: ip_address;
3. `sudo apt-get update`
4. Install NGINX -- `sudo apt install nginx`
5. Server Block Update -- `vim /etc/nginx/sites-available/default`
  - Server Block Example Down below
6. Install HTTPS Certification /w Certbot
  - https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04
7. Install Docker
  - https://docs.docker.com/engine/install/ubuntu/
8. Sign In To Docker
9. Pull Docker Image
10. Run Docker Image with ENV file
- `docker run --env-file .env -p '3000:3000' liamyoung/ww-webapp:1.94`

### Building Docker Image
1. Make sure that NEXT_PUBLIC_URL and PAYLOAD_PUBLIC are the set URL in .env
  - ex: lkycode.com instead of localhost:3000
2. Docker image building
  - `docker build -t liamyoung/ww-webapp:2.23 --platform linux/amd64 .`
3. Pushing Docker Image
  - `docker push liamyoung/ww-webapp:2.23`

### Common Errors:
Prerendering errors
- DO NOT SET `NODE=development` when building for production!!!!!
- DO Set `NODE_ENV=development`, can cause csp errors
- for prod, docker needs to have lkycode.com
- use yarn only for building -- npm can cause versioning errors between drizzle orm and payload


### NGINX Configuration
```server {
    server_name lkycode.com www.lkycode.com;
    client_max_body_size 100M;

    set $cspNonce $request_id;
    sub_filter_once off;
    sub_filter_types *;
    sub_filter NGINX_CSP_NONCE $cspNonce;

    add_header Content-Security-Policy "
      default-src 'self' https://raw.githubusercontent.com https://maps.googleapis.com https://maps.gstatic.com https://ww-group.nyc3.cdn.digitaloceanspaces.com 'nonce-$cspNonce';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com 'nonce-$cspNonce';
      child-src 'self';
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com 'nonce-$cspNonce';
      img-src 'self' https://maps.googleapis.com https://maps.gstatic.com https://www.googletagmanager.com https://ww-group.nyc3.cdn.digitaloceanspaces.com data:;
      font-src 'self' https://fonts.gstatic.com;
      frame-src 'self' https://www.youtube.com;
      connect-src 'self' https://maps.googleapis.com https://maps.gstatic.com www.googletagmanager.com;
      script-src-elem 'self' https://www.googletagmanager.com 'nonce-$cspNonce';
    ";

    location / {
      proxy_pass http://localhost:3000;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;

      add_header Access-Control-Allow-Origin *;
      add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
      add_header Access-Control-Allow-Headers 'Authorization, Content-Type';
      if ($request_method = OPTIONS) {
              return 204;
      }
    }

    location /admin {
            proxy_pass http://localhost:3000/admin;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/lkycode.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/lkycode.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = www.lkycode.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = lkycode.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name lkycode.com www.lkycode.com;
    return 404; # managed by Certbot
}
```

### Prod DB Migrations
1. Download Current DB using PGAdmin
2. Make new local DB
3. Do local changes /w new migrations
4. 
