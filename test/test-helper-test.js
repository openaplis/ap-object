'use strict'

const assert = require('chai').assert
const testHelper = require('../src/index').testHelper

describe('Test Helper Tests', function() {

  it('Test Test Data', function(done) {
      testHelper.getTestTestData(function (err, tests) {
        if(err) return console.log(err)
        assert.isAtLeast(tests.length, 1)
        done()
      })
  })

})
