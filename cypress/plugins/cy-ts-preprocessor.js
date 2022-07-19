/* eslint-disable @typescript-eslint/no-var-requires */
const wp = require("@cypress/webpack-preprocessor");

const webpackOptions = require("./webpack.config");

module.exports = wp({ webpackOptions });
