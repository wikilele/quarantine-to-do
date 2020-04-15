const app = require('../routes/routes.js')
const db = require('../models/db.js')
const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiJson = require('chai-json')

const { expect } = chai
chai.use(chaiHttp)
chai.use(chaiJson)

describe('get actvity test', () => {
  it('gets the activity sentence', async () => {
    await db.connect('localhost', 4202, 'test')
      .then(db.drop)
      .then(db.init)

    chai.request(app.api)
      .get('/api/activity')
      .end((_, res) => {
        console.log(res.body.activity)
        expect(res).to.have.status(200)
        expect(res.body.activity).to.be.a('string')
      })
  })
})
