# Primer Server UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## Setup
1. Run `npm install`
2. Go to `src/app/server/server.service.ts`
3. Change `this.url = 'http://youraddress.com/$version_number/';`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
1. Install apache2 and make `primer-server` folder in `/var/www/html`
2. Run `./deploy.sh $version_num`
For example, `./deploy.sh 2.2.2`
