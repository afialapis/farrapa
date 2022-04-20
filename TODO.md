Reglas / pkgjson / esm vs cjs

· Tener en cuenta extensiones .mjs y .cjs
· Bundlear tal que:
  ESM: dist/.../...mjs
  CJS: dist/.../...cjs
  UMD: dist/.../...js

 · si type="module", Node pensara wue todas las src/**/*.js son ESM







· Use package.json::exports instead of monorepo/multiple packages?

