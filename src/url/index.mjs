function queryStringToJson(url) {
  const search = url.indexOf("?") >= 0 ? url.substr(url.indexOf("?")) : ""
  if (search && search !== "?") {
    const pairs = search.slice(1).split("&")

    const result = {}
    pairs.forEach((pair) => {
      pair = pair.split("=")
      const name = pair[0]
      const value = pair[1]

      // Replace '+' with space and decode URI component
      // If you want to pass '+'in the query string, you can encode it as '%2B'
      ///   value.replace(/\+/g, '%2B')
      result[name] = decodeURIComponent((value || "").replace(/\+/g, " "))
    })
    return JSON.parse(JSON.stringify(result))
  }
  return {}
}

export { queryStringToJson }
