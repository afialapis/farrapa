/*
https://en.wikipedia.org/wiki/ANSI_escape_code
*/

const _colorCodes = [
  ['30', 'black'],
  ['31', 'red'],
  ['32', 'green'],
  ['33', 'yellow'],
  ['34', 'blue'],
  ['35', 'magenta'],
  ['36', 'cyan'], 
  ['37', 'white'],
  ['38', 'gray']
]

const _mods = [
  ['0;', ''],
  ['1;', 'bold'],
  ['2;', 'light'],
  ['3;', 'italic'],
  ['4;', 'under'],
  //['5;', 'slow_blink'],
  //['6;', 'rapid_blink'],
  ['7;', 'invert'],
  //['8;', 'hide'],
  ['9;', 'strike']
]


const _makeColorFunction = (num_code, color_name, mod, mod_name) => {
  const code= `\u001b[${mod}${num_code}m`
  const reset= `\u001b[0;39m`

  const fn = (s) => {
    return code + s + reset
  }
    
  const fn_name = `${color_name}${mod_name ? '_' : ''}${mod_name}`

  Object.defineProperty(fn, "name", { value: fn_name })

  return fn

}

const color_functions= {}

for (let [num_code, name] of _colorCodes) {
  for (let [mod, mod_name] of _mods) {
    const fn= _makeColorFunction(num_code, name, mod, mod_name)
    color_functions[fn.name]= fn
  }
}

module.exports = color_functions


