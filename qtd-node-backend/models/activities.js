const mongoose = require('mongoose')
const db;

function connect(host,port,dbName){
    const dbUrl = `mongodb://${host}:${port}/${dbName}`
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
}

function close(){
    db.close()
}

function getActivities(){
    db.once('open', function () {
        // we're connected!
        var activitySchema = new mongoose.Schema({
          suggestion: String
        })
        var Activity = mongoose.model('Activity', activitySchema)
    
        Activity.find(function(err, activities){
        })
    })
}




exports.activities = ['read a book', 'watch a film', 'play video-games', 'watch The Lord Of The Rings', 'study']