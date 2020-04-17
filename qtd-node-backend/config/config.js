
var config = {}
config.api = {}
config.db = {}

config.api.host = process.env.API_HOST || 'localhost'
config.api.port = process.env.API_PORT || 4201

config.db.host = process.env.DB_HOST || 'localhost' // 'mongo'
config.db.port = process.env.DB_PORT || 4202 // 27017
config.db.name = 'qtd-mongo-db'

module.exports = config
