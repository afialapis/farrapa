import * as checkers from './checkers/index.mjs'
import * as collections from './collections/index.mjs'
import * as colors from './colors/index.mjs'
import * as commons from './commons/index.mjs'
import * as encoding from './encoding/index.mjs'
import * as iter from './iter/index.mjs'
import * as memoize from './memoize/index.mjs'
import * as numbers from './numbers/index.mjs'
import * as objects from './objects/index.mjs'
import * as pretty_console from './pretty-console/index.mjs'
import * as promises from './promises/index.mjs'
import * as strings from './strings/index.mjs'
import * as url from './url/index.mjs'

const all= {
  ...checkers,
  ...collections,
  ...colors,
  ...commons,
  ...encoding,
  ...iter,
  ...memoize,
  ...numbers,
  ...objects,
  ...pretty_console,
  ...promises,
  ...strings,
  ...url,  
}

module.exports= all