# Summary

SystemJS needs to run on a server. The good thing about using SystemJS is we don't need to npm install packages (like we did in Module 13).

1. Set up BrowserSync

    ```
    npm init // to create package.json
    
    npm install browser-sync --save-dev
    
    // in package.json under "scripts"
    "server": "browser-sync start --directory --server --files '*.js, *.html, *.css'"
    
    npm run server
    ```
    
    * `browser-sync start`: starts browsersync
    * `--directory`: show a directory listing for the server (it's optional for me)
    * `--server`: run a local server
    * `--files`: file paths to watch

2. Set up SystemJS

    ```
    npm install jspm -g/--save-dev
    
    
    ```
    
3. Set up Babel (only, not with webpack...)

    ```
    npm install babel-cli
    ||
    ||  updated to
    \/
    npm install --save-dev @babel/core @babel/cli
    ```
    
    In package.json, under "scripts":
    
    ```
    "babel": "babel filea.js --watch --out-file fileb.js"
    ```
    
    Install plugins and presets (a preset is a collection of plugins together):
    
    Install the plugins that you want to transform into ES5, like classes, arrow-functons. However, we don't need to install all of them now, because many ES6 features are already supported by modern browsers. So rather then use the preset called ES15, we use babel-preset-env. You can tell it what browers or versions.
    
    ```
    npm i babel-preset-env@next
    ```
    
    Config in .babelrc file, or in the package.json:
    
    ```
    "babel": {
        "presets": [
          ["env", {
            "targets": {
              "browser": [
                "last 2 versions",
                "safari >= 8"
              ]
            }
          }]
        ]
      }
    ```
    
    run `npm run babel`.
    
    **Note**:
    
    When I run babel, I encountered a "SyntaxError: This experimental syntax requires enabling the parser plugin: 'objectRestSpread'". So I installed `npm install --save-dev @babel/plugin-transform-spread`.
    
    Then I got another Error:
    
    "Error: [BABEL] app.js: Requires Babel "^7.0.0-beta.41", but was loaded with "7.0.0-beta.3". You'll need to update your @babel/core version."
    
    So I installed `npm install --save-dev @babel/core @babel/cli`.


4. ES6 Polyfill

    Babel polyfill - install
    
    ```
    npm install --save @babel/polyfill
    ```
    
    And follow the [instruction](https://babeljs.io/docs/en/babel-polyfill).
    
    OR use [Polyfill.io](https://polyfill.io/v3/url-builder), simply add below to `<body>`:
    
    ```
    <script crossorigin="anonymous" href="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    ```
    
    
