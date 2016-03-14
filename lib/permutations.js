import clone from 'clone'

function swap(i, j, vs) {
  const values  = clone(vs)
  const temp    = values[i]

  values[i] = values[j]
  values[j] = temp

  return values
}

export default function permutations(values, cb, i) {
  i = i || 0

  if (i === values.length) cb( clone(values) )
  else {
    for (var j = i; j < values.length; j++) {
      const vals = swap(i, j, values)
      permutations(vals, cb, i+1)
    }
  }
}
