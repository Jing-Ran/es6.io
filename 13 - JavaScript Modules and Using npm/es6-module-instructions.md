1. First Install your dependencies:

```bash
npm install webpack babel-loader babel-core babel-preset-es2015-native-modules --save-dev
```

**Updates**:
`babel-preset-es2015-native-modules` is deprecated.

This preset is no longer necessary as the function that it performed can now be achieved natively.

Instead of es2015-native-modules please use es2015 with { "modules": false } option:

```
presets: [
  ["es2015", { "modules": false }]
]
```

2. Then, Create a `webpack.config.js` file:

```js
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};
```

3. Setup the build npm script in `package.json`:

```json
"build": "webpack --progress --watch"
```

