# react-redux-webpack-starter
Simple starter pack to start new react apps out of the box, or easily configure to build upon

Out-of-the-box utilities:
___

- Autoprefixer (postcss)
- Hot Module Reloading
- Jest + Enzyme
- Sass
- Source-mapping

Installation and usage
---

To install:

```
$ git clone https://github.com/edgarfinn/react-redux-webpack-starter.git

$ cd react-redux-webpack-starter/

$ npm install

```

Webpack is configured to perform certain tasks differently depending on whether in ```development``` environment or ```production``` environment.

To run the development server:

```
$ npm run dev
```

In order to export build files, run:

```
$ npm run build
```

Depending on where your application is deployed, you may need to add to, or make changes to the ```"postinstall"``` script in ```package.json```.

This starter kit comes with ```express``` installed and configured with a basic express static file server to serve up the bundled output (see ```/index.js```).
