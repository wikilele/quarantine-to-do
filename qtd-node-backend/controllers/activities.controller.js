const db = require('../models/db.js')

async function getRandomActivity () {
  var activities = await db.getActivities()
  return activities[Math.floor(Math.random() * activities.length)]
}

exports.getRandomActivity = getRandomActivity
