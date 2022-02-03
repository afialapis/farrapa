require('@babel/register')

const package_names= [
  // these first, other s will depend on them
  'colors',
  'numbers',

  'checkers',
  'collections',
  'encoding',
  'iter',
  'memoize',
  'objects',
  'pretty-console',
  'promises',
  'strings',
  'url'
]

const {dist_all} = require('./dist')
dist_all(package_names)