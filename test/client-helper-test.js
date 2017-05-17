'use strict'

const assert = require('chai').assert
const clientHelper = require('../src/index').clientHelper

describe('Client Helper Tests', function() {

  it('Client Test Data', function(done) {
      clientHelper.getClientTestData(function (err, clients) {
        if(err) return console.log(err)
        assert.isAtLeast(clients.length, 1)
        done()
      })
  })

})
