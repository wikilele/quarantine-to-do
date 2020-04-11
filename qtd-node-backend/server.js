const app = require('./routes/routes.js')
var port = process.env.PORT || 4242 // set our port

app.api.listen(port)
console.log('localhost:' + port)

module.exports = app.api
