import {rollupBuild} from './build'
import {rollupInput} from './inputs'
import {rollupOutputs} from './outputs'

async function dist_all(package_names) {
  for (const package_name of package_names) { 
    const input = rollupInput(package_name)
    const outputs= rollupOutputs(package_name)

    await rollupBuild(input, outputs)    
  }
}

module.exports = {dist_all}