function range(f, t) {
  if (t === undefined) {
    t = f - 1
    f = 0
  }
  const r = []
  for (let i = f; i <= t; i++) {
    r.push(i)
  }
  return r
}

export { range }
