const chai = require('chai')
const database = require('../../models/db.js')
const fs = require('fs')
const config = require('../../config/config')

describe('tests the db creation', () => {
  it('creates, initializes the db and checks its contents', async function () {
    await database.connect(config.db.host, config.db.port, 'test')
      .then(database.drop)
      .then(database.init)
      .then(database.getActivities)
      .then((activities) => {
        var linesNumber = fs.readFileSync('models/activities.init', 'utf-8').split('\n').length
        chai.assert(activities.length = linesNumber)
      })
  })
})
