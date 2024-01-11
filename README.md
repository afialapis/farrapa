![farrapa logo](https://www.afialapis.com/os/farrapa/logo.png)

> Small utils that bring great satisfactions

`farrapa` packages just bring some low level, not crucial but usual tools you may need.
At least [we](https://github.com/afialapis) need them!

Tools are split in different import paths. So your bundle size won't be affected.

For example:

```js

import {collTotalBy} from 'farrapa/collections'

const people= [
  {'name': 'Peter', 'age': 27},
  {'name': 'Lillah', 'age': 32},
  {'name': 'Freddie', 'age': 41},
]

const total = colLTotalBy(people, 'age')

// 100
```

# farrapa/colors

## Color functions

### `black(string)`, `red(string)`, `green(string)`, ...

Colorize your texts! Available color functions are :
`black`, `black_bold`, `black_light`, `black_italic`, `black_under`, `black_invert`, `black_strike`,
`red`, `red_bold`, `red_light`, `red_italic`, `red_under`, `red_invert`, `red_strike`,
`green`, `green_bold`, `green_light`, `green_italic`, `green_under`, `green_invert`, `green_strike`,
`yellow`, `yellow_bold`, `yellow_light`, `yellow_italic`, `yellow_under`, `yellow_invert`, `yellow_strike`,
`blue`, `blue_bold`, `blue_light`, `blue_italic`, `blue_under`, `blue_invert`, `blue_strike`,
`magenta`, `magenta_bold`, `magenta_light`, `magenta_italic`, `magenta_under`, `magenta_invert`, `magenta_strike`,
`cyan`, `cyan_bold`, `cyan_light`, `cyan_italic`, `cyan_under`, `cyan_invert`, `cyan_strike`,
`white`, `white_bold`, `white_light`, `white_italic`, `white_under`, `white_invert`, `white_strike`,
`gray`, `gray_bold`, `gray_light`, `gray_italic`, `gray_under`, `gray_invert`, `gray_strike`.

### `uncolor(string)`

It removes color codes from an already colorized string.

## Working with HEX color codes

### `isTooDark(hexColor)`

Returns `true` for dark colors.

### `shadeColor(hexColor, percent)`

### `blendColors(hexColor1, hexColor2, percent)`

### `hslToHex(h, s, l)`

### `randomHex()`


# farrapa/numbers

## `asDecimal(n, d)`

## `asPrice(n)`

## `asPriceWithCurrency(n)`

## `parseNum(n)`


# farrapa/commons

## `uvl(value, defValue)`


# farrapa/checkers

## `isValidId(id)`

## `isValidEmail(email)`
  
## `isValidHostnameOrIp(address)`

## `isValidURL(address)`


# farrapa/collections

## `collMatches(coll, params)`

## `collSort(coll, by, order)`

## `collMaxBy(coll, fld)`

## `collTotalBy(arr, field)`


# farrapa/encoding

## `b64toBlob(b64Data, contentType = '', sliceSize = 512)`

## `uint8arrayToBase64(bytes)`

## `arrayBufferToBase64(arrayBuffer)`

## `b64Size(base64)`


# farrapa/iter

## `range(f, t)`


# farrapa/memoize

## `memoize(target, key, descriptor)`

# farrapa/objects

## `isEmptyObject(o)`

## `objFilter(obj, func)`

## `objClone (obj)`


# farrapa/pretty-console

After `import * from "farrapa-pretty-console"`, `console` output will be colored like:

  - console.silly   : magenta
  - console.debug   : cyan   
  - console.verbose : blue   
  - console.info    : white  
  - console.warn    : yellow 
  - console.error   : red    

# farrapa/promises

## `sleep(ms)`

# farrapa/strings

## `lpad(n, width, z)`

## `ltrim(s)`

## `slugify(str)`

## `hashFromString(s)`

## `toTitleCase(str)`

# farrapa/url

## `queryStringToJson(url)` 

