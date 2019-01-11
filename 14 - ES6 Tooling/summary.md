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