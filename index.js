// set up babel support, all files in lib can now use ES2015 syntax
require('babel-register')({
  presets: ['es2015']
})

require('./lib/arbitrage').run()
