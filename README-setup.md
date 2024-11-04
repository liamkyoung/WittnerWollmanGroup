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



### Common Errors:
Prerendering errors
- DO NOT SET NODE=development when building for production!!!!!

### NGINX Configuration
