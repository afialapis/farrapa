const codes = require('../codes.mjs')

Object.values(codes).map((c) => {
  console.log(c(`Printing some ${c.name}`))
})
