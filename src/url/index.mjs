function queryStringToJson(url) {     
  let search= url.indexOf('?')>=0 ? url.substr(url.indexOf('?')) : ''
  if (search && search!='?') {
    let pairs = search.slice(1).split('&')
    
    let result = {}
    pairs.forEach(function(pair) {
        pair = pair.split('=')
        const name= pair[0]
        const value= pair[1]

        // Replace '+' with space and decode URI component
        // If you want to pass '+'in the query string, you can encode it as '%2B'
        ///   value.replace(/\+/g, '%2B')
        result[name] = decodeURIComponent((value || '').replace(/\+/g, ' '))
    })
    return JSON.parse(JSON.stringify(result))
  }
  return {}
}


export {queryStringToJson}
