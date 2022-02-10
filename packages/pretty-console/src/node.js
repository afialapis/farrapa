//const {inspect} = require('util')
const {magenta, cyan, blue, white, yellow, red, green_light} = require('farrapa-colors')

function logger(color, _name) {
  return function() {
    // Get arguments without deoptimizing v8
    const args = []
    for (let i = 0; i < arguments.length; i++) {
      // if (typeof arguments[i] === 'object') {
      //   args.push(inspect(arguments[i], {
      //     colors: true,
      //     depth: 4,
      //     breakLength: Infinity
      //   }))
      // } else {
      args.push(arguments[i])
      // }
    }
    const sargs=args.join(' ')
    const time= (new Date()).toString().substr(4, 20)
    console.log(time +': ' + color(sargs))
  }
}

function qlogger(color) {
  return function () {
    // Get arguments without deoptimizing v8
    const args = []
    for (let i = 0; i < arguments.length; i++) {
      //if (typeof arguments[i] === 'object') {
      //  args.push(inspect(arguments[i], {
      //    colors: true,
      //    depth: 4,
      //    breakLength: Infinity
      //  }))
      //} else {
      args.push(arguments[i])
      //}
    }
    const qry = args[0].replace('Executing (default): ', '')
    const time= (new Date()).toString().substr(4, 20)
    console.log(time +': ' + color(qry))
  }
}

// Enable color logging
console.silly   = logger(magenta , 'SLY').bind(console)
console.debug   = logger(cyan    , 'DBG').bind(console)
console.verbose = logger(blue    , 'VRB').bind(console)
console.info    = logger(white   , 'INF').bind(console)
console.warn    = logger(yellow  , 'WRN').bind(console)
console.error   = logger(red     , 'ERR').bind(console)
console.query   = qlogger(green_light).bind(console)