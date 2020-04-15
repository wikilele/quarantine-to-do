const app = require('./routes/routes.js')
const db = require('./models/db.js')
const config = require('./config/config')

db.connect(config.db.host, config.db.port, config.db.name)
  .then(db.drop)
  .then(db.init)

app.api.listen(config.api.port)
console.log('localhost:' + config.api.port)
