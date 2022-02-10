const codes = require('./codes')

const { 
  uncolor, 
  isTooDark, 
  shadeColor, 
  blendColors
 } = require('./mods')

const {
  hslToHex, 
  randomHex
} = require('./hex')

module.exports= { 
  ...codes,
  uncolor, 
  isTooDark, 
  shadeColor, 
  blendColors,
  hslToHex, 
  randomHex
} 
