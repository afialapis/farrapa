const isBrowser = (typeof window !== 'undefined')

if (isBrowser) {
  require('./browser')
} else {
  require('./node')
}

