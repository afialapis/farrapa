import {magenta, cyan, blue, white, yellow, red} from '../colors/index.mjs'

function logger(color) {
  return function() {
    // Get arguments without deoptimizing v8
    const args = []
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    const sargs=args.join(' ')
    const time= (new Date()).toString().substr(4, 20)
    console.log(time +': ' + color(sargs))
  }
}

console.silly   = logger(magenta).bind(console)
console.debug   = logger(cyan   ).bind(console)
console.verbose = logger(blue   ).bind(console)
console.info    = logger(white  ).bind(console)
console.warn    = logger(yellow ).bind(console)
console.error   = logger(red    ).bind(console)
