# TypeScript TodoApp
```dash
mkdir todoList = making the todo folder
npm init -y = install npm 
npm i --save-dev typescript  = download ts as dev dipendency
npx tsc -init   = make a tsconfig file                           
```

- make a src folder for the ts files 
- make a dest folder of final output

- inside the package.json make or change the command so ts auto compile to js file when chanage \
```json
"scripts": {
    "test": "tsc --watch"
  },
```
- Inside the tsconfig file change the outDir : "./dest" to store the compile js inside dest.
- But this way the js give error when importing any npm package.
- so we can use a bundler like snowpack to bundle the typescript.

## Typescript using a bundler
```dash
npx create-snowpack-app . --template @snowpack/app-template-blank-typescript --force
```