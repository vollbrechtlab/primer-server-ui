# PrimerServer

Primer3 Web UI written in Angular 4 with Angular Material

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## How to install dependencies

### Install NodeJS

**On Debian/Ubuntu**
```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential
```

**On RHEL/CentOS/Fedora**
```shell
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
sudo yum -y install nodejs gcc-c++ make
```

### Install Angular 4 cli

```shell
sudo npm install -g @angular/cli
```

## Local Development server

Run `ng serve --poll=1000` for a dev server. Navigate to `http://<your IP address>:4200/`. The app will automatically reload if you change any of the source files.

## Public Development server

Run `ng serve --host <your IP address> --poll=1000` for a dev server. Navigate to `http://localhost:4200/` The app will automatically reload if you change any of the source files.

## Development Build

Run `ng build --dev --base-href <app's root directory>` to build the project for development. The build artifacts will be stored in the `dist/` directory. Just copy the contents of `dist/` to your web server.

## Production Build

Run `ng build --prod --base-href <app's root directory>` to build the project for production. The build artifacts will be stored in the `dist/` directory. Just copy the contents of `dist/` to your web server.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
