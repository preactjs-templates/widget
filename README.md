<div align="center">
  <img src="https://github.com/preactjs-templates/widget/blob/master/readme-logo.png?raw=true" height=300px>
  <br />
  <br />
  <h1>Preact Widget Template</h1>
</div>

## Overview
- This is template for creating a Preact widget
- [Preact-CLi](https://github.com/preactjs/preact-cli): Used for running a local development environment to use your widget in
- [Microbundle](https://github.com/developit/microbundle): Used for bundling your widget for use in other Preact web apps
- [Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template

## Usage

```
$ npx preact-cli create widget my-widget
$ cd my-widget
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the default port is already in use on
your machine, it will start the development server on a random port.

## Commands
-   `npm install`: Installs dependencies

-   `npm run dev`: Run a development server with Preact-CLI to test your widget

-   `npm run build`: NPM-ready build with Microbundle, for use in other Preact web apps

-   `npm run lint`: Lint files use ESLint

-   `npm run test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests

### How to Test

The `widget` template provides a basic test setup with Jest, Enzyme and
[`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure).
You are free to change Enzyme with any other testing library
(eg. [Preact Testing Library](https://testing-library.com/docs/preact-testing-library/intro)).

You can run all additional Jest CLI commands with the `npm run test` command as
described in the
[Jest docs](https://facebook.github.io/jest/docs/en/cli.html#using-with-npm-scripts).
For example, running jest in watch mode would be :

-   `npm run test -- --watch` instead of `jest --watch`
