/*
https://en.wikipedia.org/wiki/ANSI_escape_code
*/
const path = require('path')
const fs = require('fs')

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


const _color_codes_make_content = () => {
  const lines= []

  lines.push("const _code = (mod, num_code) => `\\u001b[${mod}${num_code}m`;")
  lines.push("const _reset= `\\u001b[0;39m`;")
  lines.push("")


  const color_fn_names= []

  for (let [num_code, color_name] of _colorCodes) {
    for (let [mod, mod_name] of _mods) {
        
      const fn_name = `${color_name}${mod_name ? '_' : ''}${mod_name}`
      lines.push(`const ${fn_name}= (s) => _code('${mod}', '${num_code}') + s + _reset `)
      color_fn_names.push(fn_name)

    }
  }

  lines.push("")
  lines.push("export {")
  for (const fn_name of color_fn_names) {
    lines.push(fn_name + ', ')
  }
  lines.push("}")
  lines.push("")

  return lines

}

const _color_codes_write_content = (lines) => {
  const fpath= path.join(__dirname, '../src/codes.js')
  fs.writeFileSync(fpath, lines.join('\n'))
}

const color_codes_make = (to_file = true) => {
  const lines= _color_codes_make_content()
  if (to_file) {
    _color_codes_write_content(lines)
  } else {
    console.log(lines)
  }
}

color_codes_make(true)