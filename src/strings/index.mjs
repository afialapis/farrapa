function lpad(n, width, z) {
  z = z || "0"
  n = n + ""
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

function ltrim(s) {
  return s.replace(/^\s+/, "")
}

// based on https://stackoverflow.com/a/18123682/1141611
// not complete, but probably good enough
function slugify(str) {
  return str
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a")
    .replace(/[çÇ]/g, "c")
    .replace(/[ðÐ]/g, "d")
    .replace(/[ÈÉÊËéèêë]/g, "e")
    .replace(/[ÏïÎîÍíÌì]/g, "i")
    .replace(/[Ññ]/g, "n")
    .replace(/[øØœŒÕõÔôÓóÒò]/g, "o")
    .replace(/[ÜüÛûÚúÙù]/g, "u")
    .replace(/[ŸÿÝý]/g, "y")
    .replace(/[^a-z0-9- ]/gi, "")
    .replace(/ /gi, "-")
    .toLowerCase()
}

function hashFromString(s) {
  let hash = 0,
    i,
    chr
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

function toTitleCase(str) {
  return str.replace(/\w*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

export { lpad, ltrim, slugify, hashFromString, toTitleCase }
