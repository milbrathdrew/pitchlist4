const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // ... other configuration options
  devServer: {
    https: true,
    key: fs.readFileSync(path.resolve(__dirname, 'ssl/private.key')),
    cert: fs.readFileSync(path.resolve(__dirname, 'ssl/certificate.crt')),
    // ... other devServer options
  },
};