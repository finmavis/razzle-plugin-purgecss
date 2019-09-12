"use strict";

const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const defaultOptions = {
  only: null,
  whitelist: [],
  whitelistPatterns: [],
  keyframes: false,
  fontFace: false,
  rejected: false
};

module.exports = function modify(
  baseConfig,
  { target, dev },
  webpack,
  userOptions = {}
) {
  const config = Object.assign({}, baseConfig);
  const options = Object.assign({}, defaultOptions, userOptions);
  const isProduction = dev === false;
  const isWeb = target === "web";

  if (isWeb && isProduction) {
    config.plugins.push(
      /**
       * Optimized all our css by Removing unused CSS using PurgeCSS
       * Docs: https://www.purgecss.com
       */
      new PurgecssPlugin({
        paths: glob.sync(options.path, {
          nodir: true
        }),
        only: options.only,
        whitelist: options.whitelist,
        whitelistPatterns: options.whitelistPatterns,
        keyframes: options.keyframes,
        fontFace: options.fontFace,
        rejected: options.rejected
      })
    );
  }

  return config;
};
