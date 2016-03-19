import prompt from 'prompt'
import humanize from 'humanize-num'

import currenciesFetch from './currencies_fetch'
import calculate from './calculator'
import { maxIterations, limitIterations } from './configs'

const iterations = humanize(maxIterations)

process.on('SIGINT', ()=> {
  console.log('Signal iterrupt received, exiting...')
  process.exit()
})

const schema = {
  properties: {
    currency: {
      required: true,
      message: 'Please enter a currency abreviation (eg. USD, EUR, GBP, etc.)',
      pattern: /^[a-zA-Z]{3}$/i
    }
  }
}

function getCurrency() {
  return new Promise((resolve, reject)=> {
    prompt.start()
    console.log('Please enter a base currency')

    prompt.get(schema, (err, result)=> {
      if(err) reject(err)
      else resolve( result.currency.toUpperCase() )
    })
  })
}

export function run() {
  let currency

  getCurrency().then( c => {
    console.log('Fetching currency information from api.fixer.io')
    currency = c
    return currenciesFetch(currency)
  })
  .then((results)=> {
    const [rates, currencies] = results
    if(limitIterations)
      console.log(`Doing arbitrage calculations, for purposes of demo stopping after ${iterations} iterations`)
    else
      console.log('Doing max number of iterations - WARNING this could take a really long time to complete')
    return calculate(currency, currencies, rates)
  })
  .then(()=> {
    console.log('DONE')
    process.exit()
  })
  .catch( err => {
    console.log('Sorry, failed to process your request.')
    console.error(err)
    process.exit()
  })
}
