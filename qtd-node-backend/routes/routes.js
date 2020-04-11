const express = require('express')
const bodyParser = require('body-parser')
const activitiesController = require('../controllers/activities-controller.js')
const cors = require('cors')

const api = express()
api.use(cors())

// configure app to use bodyParser()
// this will let us get the data from a POST
api.use(bodyParser.urlencoded({ extended: true }))
api.use(bodyParser.json())

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router() // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/activity', function (req, res) {
  console.log(activitiesController.getActivity())
  var randActivity = activitiesController.getActivity()
  res.json({ activity: randActivity })
})

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
api.use('/api', router)

exports.api = api
