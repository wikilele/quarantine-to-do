const model = require('../models/activities.js')

function getActivity () {
  return model.activities[Math.floor(Math.random() * model.activities.length)]
}

exports.getActivity = getActivity
