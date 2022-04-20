const codes = require('../src/codes')

Object.values(codes).map((c) => {
  console.log(c(`Printing some ${c.name}`))
})
