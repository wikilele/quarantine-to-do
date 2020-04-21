const chai = require('chai')
const database = require('../../models/db.js')
const fs = require('fs')

var MockMongoose = require('mock-mongoose').MockMongoose
var mockMongoose = new MockMongoose(database._mongoose)

describe('tests the db creation', () => {
  it('creates, initializes the db and checks its contents', async function () {
    mockMongoose.prepareStorage().then(async function () {
      await database.connect('localhost', 27017, 'test')
        .then(database.drop)
        .then(database.init)
        .then(database.getActivities)
        .then((activities) => {
          var linesNumber = fs.readFileSync('models/activities.init', 'utf-8').split('\n').length
          chai.assert(activities.length = linesNumber)
        })
    })
  })
})
