'use strict'

const assert = require('chai').assert
const stVincentHelper = require('../src/index').stVincentHelper

describe('StVincent Helper Tests', function() {

  it('StVincent Test Data', function(done) {
      stVincentHelper.getStVincentTestData(function (err, stVincents) {
        if(err) return console.log(err)
        assert.isAtLeast(stVincents.length, 1)
        done()
      })
  })

})
