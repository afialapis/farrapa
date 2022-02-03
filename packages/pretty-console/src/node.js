//const {inspect} = require('util')
const {LIGHT_CYAN, LIGHT_BLUE, LIGHT_GREEN, YELLOW, LIGHT_RED, RED, WHITE} = require('farrapa-colors')

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
console.silly   = logger(LIGHT_CYAN , 'SLY').bind(console)
console.debug   = logger(LIGHT_BLUE , 'DBG').bind(console)
console.verbose = logger(LIGHT_GREEN, 'VRB').bind(console)
console.info    = logger(YELLOW     , 'INF').bind(console)
console.warn    = logger(LIGHT_RED  , 'WRN').bind(console)
console.error   = logger(RED        , 'ERR').bind(console)
console.query   = qlogger(WHITE).bind(console)