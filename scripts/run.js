require('@babel/register')

const package_names= [
  'checkers',
  'collections',
  'colors',
  'encoding',
  'iter',
  'memoize',
  'numbers',
  'objects',
  'pretty-console',
  'promises',
  'strings',
  'url'
]

const {dist_all} = require('./rollup/dist')
dist_all(package_names)