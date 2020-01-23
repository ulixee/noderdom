Noderdom Scaffolding is used to generate Typescript interfaces, classes and mixins representing the DOM structure as expressed in WebIDL.

This tool is heavily based on the fantastic work by the Typescript team to generate their dom.generated.d.ts files: [TSJS-lib-generator](https://github.com/typescript/tsjs-lib-generator).

# How to Use

Install from NPM:
```
npm install noderdom-scaffolding
```

Generate classes and mixins to current folder:
```
noderdom-scaffolding generate
```

# ToDo

- Add DynamicHandler (get/set/run) that is default for each method. By default, not-implemented error will be thrown.

- Do away with idea of CLI and instead add scripts along with package.json commands.

- Extract documentation from Mozilla's MDN.
