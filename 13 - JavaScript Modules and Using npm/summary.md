# Summary

1. If you accidentally delete your node_modules/ folder, simply `npm install` to bring it back. It will automatically install all your packages based on `dependencies`.
2. `--save` vs. `--save-dev`

    `--save-dev`: just a development tool (under "devDependencies")
    
    `--save`: a part of the application (under "dependencies")
    
3. To use JS modules, install webpack. Follow the [instruction](es6-module-instructions.md).
4. **Install webpack and babel: webpack 4**
    
    Babel:
    
    ```
    npm install --save-dev @babel/core @babel/preset-env
    
    npm install babel-cli --save-dev
    
    npm install babel-preset-es2015 --save-dev
    
    
    ```
    
    Webpack:
    
    ```
    npm install babel-loader webpack --save-dev
    
    npm install --save-dev webpack-cli
    ```