
var config = {}
config.api = {}
config.db = {}

config.api.host = 'localhost'
config.api.port = process.env.PORT || 4201

config.db.host = 'localhost' // 'mongo'
config.db.port = 4202 // 27017
config.db.name = 'qtd-mongo-db'

module.exports = config
