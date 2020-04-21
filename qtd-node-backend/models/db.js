const mongoose = require('mongoose')
const fs = require('fs')

const activitySchema = new mongoose.Schema({
  suggestion: String
})
const Activity = mongoose.model('Activity', activitySchema)

function connect (host, port, dbName) {
  const dbUrl = `mongodb://${host}:${port}/${dbName}`
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'))
  return mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((reason) => { console.log('unable to connect to ' + dbUrl) })
}

// delete all the activities documents from the db
function drop () {
  return Activity.deleteMany().exec()
}

// popolate the db with the content of the opened file
async function init () {
  var lines = fs.readFileSync('models/activities.init', 'utf-8').split('\n')

  for (var index in lines) {
    var line = lines[index]

    if (line.trim()) {
      var activity = new Activity({ suggestion: line })
      await activity.save()
    }
  }
}

function getActivities () {
  return Activity.find().exec()
}

function close () {
  mongoose.connection.close()
}

exports.connect = connect
exports.drop = drop
exports.close = close
exports.getActivities = getActivities
exports.init = init

exports._mongoose = mongoose
