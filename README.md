<div align="center">
  <img src="https://github.com/preactjs-templates/widget/blob/master/readme-logo.png?raw=true" height=300px>
  <br />
  <br />
  <h1>Preact Widget Template</h1>
</div>

## Documentation
- This is the widget template for [preact-cli](https://github.com/preactjs/preact-cli).
- [For Preact](https://preactjs.com/): General information about how to work with Preact, not specific to this template


## Usage

```
$ npx preact-cli create widget my-widget
$ cd my-widget
$ npm install
$ npm run dev
```

Development server runs on port `8080`. If the default port is already in use on your machine it will start the development server on a random port.

## Commands

- `npm run dev`: Starts a dev server with hotreload and widget placeholder.

- `npm run build`: Builds a documentation web app in `build` folder and a production ready UMD bundle ready to be embedded in any non-preact page.

- `npm run dist`: Builds NPM ready bundles in `dist` folder to be consumed by other `preact` web apps.

- `npm run serve`: Either starts a production ready dev server demo-ing your widget or local env based on your environment variable.

- `npm run test`: Runs your awesome UI tests with Jest.
