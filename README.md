# Website Log Reader

![ Website Log Reader](https://github.com/catwalkghost/website-log-reader/raw/master/static/screenshot.png "Screenshot")

## Project Summary
This is sample React project, which uses an externally loaded data source to count visits per page.
Note that unique (per IP) visits counter has not been implemented due to the time constraints.

## Project Set Up
The project doesn't use CRA or similar. Instead, it is set up using own generic Webpack boilerplate.

The project aims for quality and readable code and uses ESLint and Prettier (AirBnB Rules).

While the project doesn't use TypeScript, it takes advantage of PropTypes library to perform type checking. Additional type checking is done with helper functions, when possible.

The project is styled using SCSS. While it may not be necessary for the scale of the project, the aim was to demonstrate a sample structure, which supports some degree of scalability. 

## Dependencies
The project uses the following libraries for convenience:

[FPX](https://github.com/mitranim/fpx) — a perofrmance-optimised Loadah-like library

[Stylebox](https://aristovpro.github.io/stylebox/#about) — a small SCSS library with a collection of atomic classes

## Tests
Test suite was set up, but tests have not been written due to the lack of time. They can be added upon request.

## Available Scripts

```npm i``` or ```yarn```
Available Scripts
In the project directory, you can run:

```npm start``` or ```yarn start```
Runs the app in the development mode.
Automatically opens http://localhost:3000 in your default browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```npm build:dev``` or ```yarn build:dev```
Bundles the app in development mode and creates the development build of the app in the dist folder.

```npm build:prod``` or ```yarn build:prod```
Bundles the app in production mode and creates the production build of the app in the build folder.

```npm test``` or ```yarn test```
Runs all the tests for the app (using Jest & Enzyme) and outputs the results of the tests in the terminal.

