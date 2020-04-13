const app = require('./routes/routes.js')
const db = require('./models/db.js')
var port = process.env.PORT || 4242 // set our port

db.connect('localhost', 4202, 'qtd-mongo-db')
  .then(db.drop)
  .then(db.init)

app.api.listen(port)
console.log('localhost:' + port)

module.exports = app.api
