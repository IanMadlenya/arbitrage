import rest from 'restler'
import { parsers } from 'restler'
import merge from 'merge'
import async from 'async'

import { timeout, retries } from './configs'

const currencyDataUrl = 'http://api.fixer.io/latest?base='

const restOptions = {
  parser:     parsers.auto,
  timeout:    timeout
}

function fetchRatesData(currency) {
  return new Promise((resolve, reject)=> {
    const url = `${currencyDataUrl}${currency}`
    let attempts = 0

    rest.get(url, restOptions).on('complete', function(result, response) {
      if(result instanceof Error || response.statusCode !== 200) {
        attempts += 1

        if(result === '{"error":"Invalid base"}') {
          const err = new Error(`${currency} is not an accepted currency abreviation`)
          reject(err)
        }
        else {
          if(attempts === retries) reject(result)
          // fixer API can be a bit unreliable, so we retry a few times
          else this.retry(2000)
        }
      }
      else {
        resolve(result.rates)
      }
    })
  })
}

export default function(currency) {
  return new Promise((resolve, reject)=> {
    fetchRatesData(currency).then( rs => {
      process.stdout.write(`${currency} `)

      const currencies = Object.keys(rs)
      const rates      = {}
      rates[currency]  = rs

      // Currency data fetched in parallel equests. If this causes timeout or
      // 500 error issues with API, change map to mapSeries to run one request
      // at a time
      async.map(currencies, (curr, next)=> {
        fetchRatesData(curr).then( rs => {
          const rate = new Object()

          rate[curr] = rs
          process.stdout.write(`${curr} `)
          next(null, rate)
        })
        .catch(next)

      }, (err, results)=> {
        if(err) reject(err)
        else {
          async.reduce(results, rates, (rs, rate, next)=> {
            next(null, merge(rs, rate))

          }, (err, results)=> {
            if(err) reject(err)
            else {
              console.log()
              resolve([results, currencies])
            }
          })
        }
      })
    })
    .catch(reject)
  })
}
