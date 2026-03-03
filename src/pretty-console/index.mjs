import { blue, cyan, magenta, red, white, yellow } from "tinguir"

function logger(color) {
  return (...args) => {
    const sargs = args.join(" ")
    const time = new Date().toString().substr(4, 20)
    console.log(time + ": " + color(sargs))
  }
}

console.silly = logger(magenta).bind(console)
console.debug = logger(cyan).bind(console)
console.verbose = logger(blue).bind(console)
console.info = logger(white).bind(console)
console.warn = logger(yellow).bind(console)
console.error = logger(red).bind(console)
