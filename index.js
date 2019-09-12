'use strict';

const glob = require('glob');
const PurgecssPlugin = require('purgecss-webpack-plugin');

module.exports = function modify(baseConfig, { target, dev }, webpack, options) {
  const config = Object.assign({}, baseConfig);
  const isProduction = dev === false;
  const isWeb = target === 'web';

  if (isWeb && isProduction) {
    config.plugins.push(
      /**
       * Optimized all our css by Removing unused CSS using PurgeCSS
       * Docs: https://www.purgecss.com/
       */
      new PurgecssPlugin({
        paths: glob.sync(options.path, {
          nodir: true,
        }),
      })
    );
  }

  return config;
};