function kCombinations(values, k, cb) {
	if (k > values.length || k <= 0) return

	if (k === values.length) {
    cb(values)
    return
  }

	if (k === 1) {
		for (let i = 0; i < values.length; i++) {
			cb([values[i]])
		}
		return
	}

	for (let i = 0; i < values.length - k + 1; i++) {
		const head = values.slice(i, i+1)

    kCombinations(values.slice(i + 1), k - 1, tailcomb => {
  		cb(head.concat(tailcomb))
    })
	}
}

export default function combinations(values, cb) {
	// Calculate all non-empty k combinations
	for (let x = 1; x <= values.length; x++) {
		kCombinations(values, x, cb)
	}
}
