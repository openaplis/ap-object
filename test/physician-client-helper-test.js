'use strict'

const assert = require('chai').assert
const physicianClientHelper = require('../src/index').physicianClientHelper

describe('Physician Client Helper Tests', function() {

  it('Physician Client Test Data', function(done) {
      physicianClientHelper.getPhysicianClientTestData(function (err, physicianClients) {
        if(err) return console.log(err)
        assert.isAtLeast(physicianClients.length, 1)
        done()
      })
  })

})
