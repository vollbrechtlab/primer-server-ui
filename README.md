# Primer Server UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Setup
1. Install angular-cli `sudo npm install -g @angular/cli`
2. Run `npm install`
3. Go to `src/environments/environment.ts` and change API_URL to `http://youraddress.com/$version_number/`

## Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
1. Install apache2 and make `primer-server` folder in `/var/www/html`
2. Run `./deploy.sh $version_number`
For example, `./deploy.sh 2.2.2`
