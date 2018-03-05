# ASUP File Upload

This app allows a user to upload a file to an S3 bucket.

A demo can be found here: https://webscaledemo.netapp.com/asup-file-upload-app/index.html

The results can be listed here: https://webscaledemo.netapp.com/asup-file-upload

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --base-href /asup-file-upload-app/` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Upload

Setup S3 credentials for profile webscaledemo. Then run `aws s3 sync --endpoint-url https://webscaledemo.netapp.com --profile webscaledemo ./dist s3://asup-file-upload-app`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
