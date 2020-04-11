const app = require('../server.js')
const chai = require('chai')
const chaiHttp = require('chai-http')
const chaiJson = require('chai-json')

const { expect } = chai
chai.use(chaiHttp)
chai.use(chaiJson)

describe('get actvitiry test', () => {
  it('gets the activity sentence', done => {
    chai.request(app)
      .get('/api/activity')
      .end((_, res) => {
        expect(res).to.have.status(200)
        expect(res.body.activity).to.be.a('string')

        done()
      })
  })
})
