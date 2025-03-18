# farrapa
[![NPM Version](https://badge.fury.io/js/farrapa.svg)](https://www.npmjs.com/package/farrapa)
[![NPM Downloads](https://img.shields.io/npm/dm/farrapa.svg?style=flat)](https://www.npmjs.com/package/farrapa)

![farrapa logo](https://github.com/afialapis/farrapa/blob/main/logo/favicon/farrapa.png?raw=true)

---

> **[farrapa](https://academia.gal/dicionario/-/termo/farrapa)**


> **2** Manta feita con anacos de tea de diversas e diferentes cores.

> _Colocou unha farrapa aos pés da cama._

---

## Intro

> Small utils that bring great satisfactions

[`farrapa`](https://www.afialapis.com/os/farrapa) packages just bring some low level, not crucial but usual tools you may need.
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

## farrapa/colors
 
 * `isTooDark(hexColor)`: Returns `true` for dark colors.
 * `shadeColor(hexColor, percent)`
 * `blendColors(hexColor1, hexColor2, percent)`
 * `hslToHex(h, s, l)`
 * `randomHex()`

## farrapa/numbers

 * `asDecimal(n, d)`
 * `asPrice(n)`
 * `asPriceWithCurrency(n)`
 * `parseNum(n)`

## farrapa/commons

 * `uvl(value, defValue)`

## farrapa/checkers

 * `isValidId(id)`
 * `isValidEmail(email)`
 * `isValidHostnameOrIp(address)`
 * `isValidURL(address)`

## farrapa/collections

 * `collMatches(coll, params)`
 * `collSort(coll, by, order)`
 * `collMaxBy(coll, fld)`
 * `collTotalBy(arr, field)`

## farrapa/encoding

 * `b64toBlob(b64Data, contentType = '', sliceSize = 512)`
 * `uint8arrayToBase64(bytes)`
 * `arrayBufferToBase64(arrayBuffer)`
 * `b64Size(base64)`

## farrapa/iter

 * `range(f, t)`

## farrapa/memoize

 * `memoize(target, key, descriptor)`

## farrapa/objects

 * `isEmptyObject(o)`
 * `objFilter(obj, func)`
 * `objClone (obj)`
 * `objAreEqual (obj1, obj2, ...objN)`

## farrapa/pretty-console

After `import * from "farrapa-pretty-console"`, `console` output will be colored like:

 * `console.silly`   : `magenta`
 * `console.debug`   : `cyan`
 * `console.verbose` : `blue`
 * `console.info`    : `white`
 * `console.warn`    : `yellow`
 * `console.error`   : `red`

Colors are taken from [`tinguir`](https://www.afialapis.com/os/tinguir/).

## farrapa/promises

 * `sleep(ms)`

## farrapa/strings

 * `lpad(n, width, z)`
 * `ltrim(s)`
 * `slugify(str)`
 * `hashFromString(s)`
 * `toTitleCase(str)`

## farrapa/url

 * `queryStringToJson(url)` 

