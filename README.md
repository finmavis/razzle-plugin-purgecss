# Razzle Plugin PurgeCSS

This package contains a plugin to Remove unused CSS with Razzle.

## Usage in Razzle Projects

- Install `razzle-plugin-purgecss`

  if you're using `yarn`

  ```
  yarn add razzle-plugin-purgecss --dev
  ```

  if you're using `npm`

  ```
  npm install razzle-plugin-purgecss --save-dev
  ```

- create a `razzle.config.js` file in root directory of project (next to the package.json) and put this content inside it

  ```
  // razzle.config.js
  const path = require('path');

  module.exports = {
    plugins: [
      {
        name: 'purgecss',
        options: {
          // This path options is required for PurgeCSS to analyzed all of yours content
          path: path.resolve(__dirname, 'src/**/*'),
        }
      }
    ],
  };
  ```

## Options

- only <br>
  You can specify entrypoints to the `purgecss` with the option `only`:

  ```
  // razzle.config.js
  const path = require('path');

  module.exports = {
    plugins: [
      {
        name: 'purgecss',
        options: {
          path: path.resolve(__dirname, 'src/**/*'),
          only: ['bundle', 'vendor'],
        }
      }
    ],
  };
  ```

- whitelist (default: []) <br>
  You can `whitelist` selectors to stop PurgeCSS from removing them from your CSS. This can be accomplished with the options `whitelist` and `whitelistPatterns`.

  ```
  // razzle.config.js
  const path = require('path');

  module.exports = {
    plugins: [
      {
        name: 'purgecss',
        options: {
          path: path.resolve(__dirname, 'src/**/*'),
          whitelist: ['random', 'yep', 'button'],
        }
      }
    ],
  };
  ```

- whitelistPatterns (default: []) <br>
  You can whitelist selectors based on a regular expression with whitelistPatterns.

  ```
  // razzle.config.js
  const path = require('path');

  module.exports = {
    plugins: [
      {
        name: 'purgecss',
        options: {
          path: path.resolve(__dirname, 'src/**/*'),
          whitelistPatterns: [/red$/],
        }
      }
    ],
  };
  ```

- keyframes (default: false) <br>
  If you are using a CSS animation library such as animate.css, you can remove unused keyframes by setting the keyframes option to true.

  ```
  // razzle.config.js
  const path = require('path');

  module.exports = {
    plugins: [
      {
        name: 'purgecss',
        options: {
          path: path.resolve(__dirname, 'src/**/*'),
          keyframes: true
        }
      }
    ],
  };
  ```

- fontFace (default: false) <br>
  If there are any unused @font-face rules in your css, you can remove them by setting the fontFace option to true

  ```
  // razzle.config.js
  const path = require('path');

  module.exports = {
    plugins: [
      {
        name: 'purgecss',
        options: {
          path: path.resolve(__dirname, 'src/**/*'),
          fontFace: true,
        }
      }
    ],
  };
  ```

- rejected (default: false) <br>
  It can sometimes be more practical to scan through the removed list to see if there's anything obviously wrong. If you want to do it, use the rejected option.

  ```
  // razzle.config.js
  const path = require('path');

  module.exports = {
    plugins: [
      {
        name: 'purgecss',
        options: {
          path: path.resolve(__dirname, 'src/**/*'),
          rejected: true,
        }
      }
    ],
  };
  ```

See [PurgeCSS](https://purgecss.com/guides/razzle.html) for more information.
