import path from 'path'
import {rollupInputPlugins} from './plugins'

const _inputPlugins= rollupInputPlugins()

const _inputFile = (package_name) => path.join(__dirname, `../../packages/${package_name}/src/index.js`)

const rollupInput = (package_name) => {
  return {
    input: _inputFile(package_name),
    plugins: _inputPlugins
  }
}




export {rollupInput}