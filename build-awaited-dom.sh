rm -rf ./builds/awaited-dom

./scripts/2-finalize/generateDOM.ts awaited

tsc -p ./build-tsconfig-awaited-dom.json

./build-package-json-awaited-dom.ts

cp ./build-README-awaited-dom.md ./builds/awaited-dom/README.md
cp ./LICENSE.md ./builds/awaited-dom/LICENSE.md
cp ./files/2-finalized/awaited-dom/docs.json ./builds/awaited-dom/docs.json
