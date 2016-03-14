import combinations from './combinations'
import permutations from './permutations'
import combinationPermutations from './combination_permutations'
import { maxIterations, limitIterations } from './configs'

export default function(currency, currencies, rates) {
  return new Promise((resolve, reject)=> {
    let iterations = 0
    let arbitrage  = 1.0 // arbitrage theshold for reporting better values

    // swap function call below between combinations, permutations or
    // combinationPermutations to get the different type of currency
    // path logical calculation outputs. Interestingly, using combinations appears
    // to be provide best paths in the shortest time period (although alot of
    // potential pths are missed). combinationPermutations will yield the most
    // accurate results, given enough time.
    combinationPermutations(currencies, currs => {
      const arbitrageData = currs.reduce((data, cur)=> {
        const [prevCur, total] = data
        return [cur, total * rates[prevCur][cur]]
      }, [currency, 1.0])

      const [cur, total] = arbitrageData
      const arbitrageVal = total * rates[cur][currency]

      if(arbitrageVal > arbitrage) {
        const output = `1 => ${currency} -> ${currs.join(' -> ')} -> ${currency} => ${arbitrageVal}`

        console.log(output)
        arbitrage = arbitrageVal
      }

      if(limitIterations) {
        iterations += 1
        if(iterations > maxIterations) {
          console.log('Arbitrage iterations complete')
          resolve()
          process.exit()
        }
      }
    })
  })
}
