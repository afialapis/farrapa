require('@babel/register')

const package_names= [
  // these first, others will depend on them
  'colors',
  'numbers',
  
  'commons',
  'checkers',
  'collections',
  'encoding',
  'iter',
  'memoize',
  'objects',
  'pretty-console',
  'promises',
  'strings',
  'url',

  // last one, dependant of every other else
  'index'
]

const {dist_all} = require('./dist')
dist_all(package_names)