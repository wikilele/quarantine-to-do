// populating the mongodb
const mongoose = require('mongoose')
const fs = require('fs')
const readline = require('readline')
const yaml = require('js-yaml')

var host = 'localhost'
var port = '27017'
try {
    let fileContents = fs.readFileSync('mongo-config.dev.yaml', 'utf8');
    let config = yaml.safeLoad(fileContents);

    host = config.net.bindIp
    port = config.net.port
} catch (e) {
    console.log(e);
    // the we will connect to the db using the default values
}
// Connection URL
const dbName = 'qtd-activities-db' 
const dbUrl = `mongodb://${host}:${port}/${dbName}`

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    // we're connected!
    var activitySchema = new mongoose.Schema({
        suggestion : String
    })
    var Activity = mongoose.model('Activity',activitySchema)
    Activity.remove()

    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input file as a single line break.
    const lineReader = readline.createInterface({
        input: fs.createReadStream('activities.init'),
        crlfDelay: Infinity
    })

    lineReader.on('line', function(line) {
        if (line.trim()){
            var activity = new Activity({suggestion : line})
            activity.save()
        }   
    })

})

db.close()
