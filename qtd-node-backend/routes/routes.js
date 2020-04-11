const express = require('express')
const bodyParser = require('body-parser')
const activitiesController = require('../controllers/activities-controller.js')
const cors = require('cors')

const api = express()
api.use(cors())

// this will let us get the data from a POST
api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())

var router = express.Router() 

// API ROUTES
router.get('/activity', function (req, res) {
  console.log(activitiesController.getActivity())
  var randActivity = activitiesController.getActivity()
  res.json({ activity: randActivity })
})
//=========================================================

// all of our routes will be prefixed with /api
api.use('/api', router)

exports.api = api
