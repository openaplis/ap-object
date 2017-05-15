'use strict'

const assert = require('chai').assert
const hostHelper = require('../src/index').hostHelper

describe('Host Tests', function() {

  it('Host Test Data', function(done) {
      hostHelper.getHostTestData(function (err, hosts) {
        if(err) return console.log(err)
        assert.isAtLeast(hosts.length, 1)
        done()
      })
  })

})
