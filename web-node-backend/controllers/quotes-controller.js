const model = require('../models/quotes.js')

function getQuote () {
  console.log(model.quotes)
  return model.quotes[Math.floor(Math.random() * model.quotes.length)]
}

exports.getQuote = getQuote
