'use strict'

const assert = require('chai').assert
const systemUserRoleHelper = require('../src/index').systemUserRoleHelper

describe('System User Role Helper Tests', function() {

  it('System User Role Test Data', function(done) {
      systemUserRoleHelper.getSystemUserRoleTestData(function (err, systemUserRoles) {
        if(err) return console.log(err)
        assert.isAtLeast(systemUserRoles.length, 1)
        done()
      })
  })

})
