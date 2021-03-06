const app = require('../routes/routes.js')
const db = require('../models/db.js')
const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiJson = require('chai-json')
const config = require('../config/config')

const { expect } = chai
chai.use(chaiHttp)
chai.use(chaiJson)

var MockMongoose = require('mock-mongoose').MockMongoose
var mockMongoose = new MockMongoose(db._mongoose)

describe('get actvity test', () => {
  it('gets the activity sentence', async () => {
    mockMongoose.prepareStorage().then(async function () {
      await db.connect(config.db.host, config.db.port, 'test')
        .then(db.drop)
        .then(db.init)
    })

    chai.request(app.api)
      .get('/api/activity')
      .end((_, res) => {
        console.log(res.body.activity)
        expect(res).to.have.status(200)
        expect(res.body.activity).to.be.a('string')
      })
  })
})
