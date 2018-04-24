# Primer Server UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Environment
We are developing and testing all code on Ubuntu 16.04 and RedHat 7 x64

## Pre-setup
1. Install node and npm 
```
# On Ubuntu
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# On RedHat
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs
```
2. Install angular-cli
`sudo npm install -g @angular/cli`

## Setup
1. Run `npm install`
2. Go to `src/environments/environment.prod.ts` and change API_URL to `http://your-api-address.com/v$api_version_number/`

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment
1. Install a web server such as apache2
2. Allow .htaccess in the web server setting
3. Run `build.sh` 
4. Run `deploy.sh` (this script assumes html is put in `/var/www/html/`)
