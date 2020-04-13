const db = require('../models/db.js')

function getRandomActivity () {
  return db.getActivities()
    .then((activities) => {
      return activities[Math.floor(Math.random() * activities.length)]
    })
}

exports.getRandomActivity = getRandomActivity
