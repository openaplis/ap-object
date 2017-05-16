'use strict'

const assert = require('chai').assert
const stainTestHelper = require('../src/index').stainTestHelper

describe('Stain Test Helper Tests', function() {

  it('Stain Test Test Data', function(done) {
      stainTestHelper.getStainTestTestData(function (err, stainTests) {
        if(err) return console.log(err)
        assert.isAtLeast(stainTests.length, 1)
        done()
      })
  })

})
