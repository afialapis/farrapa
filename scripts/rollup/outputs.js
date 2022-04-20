import path from 'path'
import {rollupOutputPlugins} from './plugins'
import {toTitleCase} from '../../packages/strings/src'

const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

const titlefyPkgName = (package_name) => {
  const suffix= package_name.replace('farrapa-', '')
  return `farrapa${toTitleCase(suffix)}`

}

const makeGlobals = (packageJSON) => {
  const pkgs= Object.keys(packageJSON.dependencies)
  const globals= {}
  pkgs.map((n) => {
    globals[n]= titlefyPkgName(n)
  })
  return globals
}

const rollupOutputs = (package_name) => {
  const root = path.join(__dirname, `../../packages/${package_name}`)
  const resolve_to_pkg = (f) => {
    return path.join(root, f)
  }
  const packageJSON = require(resolve_to_pkg(`package.json`))

  return [
    // CommonJs
    {
      file: resolve_to_pkg(packageJSON.cjs),
      format: 'cjs',
      exports: 'named',
      plugins: rollupOutputPlugins(false)
    }, 
    // CommonJs .min
    {
      file: minifyExtension(resolve_to_pkg(packageJSON.cjs)),
      format: 'cjs',
      exports: 'named',
      plugins: rollupOutputPlugins(true)
    }, 
    // ES module
    {
      file: resolve_to_pkg(packageJSON.module),
      format: 'esm',
      exports: 'named',
      plugins: rollupOutputPlugins(false)
    },
    // ES module .min
    {
      file: minifyExtension(resolve_to_pkg(packageJSON.module)),
      format: 'esm',
      exports: 'named',
      plugins: rollupOutputPlugins(true)
    },
    // UMD
    {
      file: resolve_to_pkg(packageJSON.browser),
      format: 'umd',
      name: titlefyPkgName(packageJSON.name),
      plugins: rollupOutputPlugins(false),
      globals: makeGlobals(packageJSON)
    },
    // UMD .min
    {
      file: minifyExtension(resolve_to_pkg(packageJSON.browser)),
      format: 'umd',
      name: titlefyPkgName(packageJSON.name),
      plugins: rollupOutputPlugins(true),
      globals: makeGlobals(packageJSON)
    }
  ]
}


export {rollupOutputs}