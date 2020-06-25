Noderdom is a library for generating Typescript interfaces, classes and mixins representing the DOM structure as expressed in WebIDL.

This tool was originally based on the fantastic work by the Typescript team for generating their dom.generated.d.ts files: [TSJS-lib-generator](https://github.com/typescript/tsjs-lib-generator).

# Install

Install from NPM:
```
npm install noderdom
```

# How to Use

First, either create or recreate the database:
```bash
yarn db:create
```
or
```bash
yarn db:reset
```

## Step 0 - Import

```bash
./scripts/0-import/importDocsFromMDN.ts
```

## Step 1 - Process

Generate database records:
```bash
./scripts/1-process/dbGenerator/insertInterfaces.ts
./scripts/1-process/dbGenerator/insertPropertiesAndMethods.ts
./scripts/1-process/dbGenerator/insertMDNDocumentation.ts
./scripts/1-process/dbGenerator/insertSupers.ts
./scripts/1-process/dbGenerator/insertComponentFilters.ts
```

Run customizer:
```bash
./scripts/1-process/customizer.ts
```

Create DOM:
```bash
./scripts/0-import/importComponentFiltersFromDb.ts awaited
./scripts/1-process/compileAwaitedComponents.ts
./scripts/2-finalize/generateDOM.ts awaited
```

## License

[MIT](LICENSE.md)
