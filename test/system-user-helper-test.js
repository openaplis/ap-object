'use strict'

const assert = require('chai').assert
const systemUserHelper = require('../src/index').systemUserHelper

describe('System User Helper Tests', function() {

  it('System User Test Data', function(done) {
      systemUserHelper.getSystemUserTestData(function (err, systemUsers) {
        if(err) return console.log(err)
        assert.isAtLeast(systemUsers.length, 1)
        done()
      })
  })

})
