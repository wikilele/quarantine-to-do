const yaml = require('js-yaml')
const fs = require('fs')

var config = {}
config.api = {}
config.db = {}

config.api.host = 'localhost'
config.api.port = process.env.PORT || 4201

config.db.host = 'localhost'
config.db.port = 27017
config.db.name = 'qtd-mongo-db'
try {
  const fileContents = fs.readFileSync('./config/mongo.config.yaml', 'utf8')
  const mongoconfig = yaml.safeLoad(fileContents)

  config.db.host = mongoconfig.net.bindIp
  config.db.port = mongoconfig.net.port
} catch (e) {
  console.log(e)
  // the we will connect to the db using the default values
}

module.exports = config
