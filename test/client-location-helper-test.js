'use strict'

const assert = require('chai').assert
const clientLocationHelper = require('../src/index').clientLocationHelper

describe('Client Location Helper Tests', function() {

  it('Client Location Test Data', function(done) {
      clientLocationHelper.getClientLocationTestData(function (err, clientLocations) {
        if(err) return console.log(err)
        assert.isAtLeast(clientLocations.length, 1)
        done()
      })
  })

})
