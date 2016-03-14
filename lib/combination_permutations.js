import permutations from './permutations'
import combinations from './combinations'

export default function combinationPermutations(values, cb) {
  combinations(values, subVals => {
    permutations(subVals, cb)
  })
}
