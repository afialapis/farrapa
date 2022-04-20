import path from 'path'
import {rollupInputPlugins} from './plugins'



const _pkgDir = (package_name) => path.join(__dirname, `../../packages/${package_name}`)
const _inputFile = (package_name) => path.join(_pkgDir(package_name), 'src/index.js')
const _pkgJson = (package_name) => path.join(_pkgDir(package_name), 'package.json')


const rollupInput = (package_name) => {
  const _inputPlugins= rollupInputPlugins(_pkgJson(package_name))

  return {
    input: _inputFile(package_name),
    plugins: _inputPlugins
  }
}




export {rollupInput}