'use strict'

const assert = require('chai').assert
const systemRoleHelper = require('../src/index').systemRoleHelper

describe('System Role Helper Tests', function() {

  it('System Role Test Data', function(done) {
      systemRoleHelper.getSystemRoleTestData(function (err, systemRoles) {
        if(err) return console.log(err)
        assert.isAtLeast(systemRoles.length, 1)
        done()
      })
  })

})
