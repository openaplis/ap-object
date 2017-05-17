'use strict'

const assert = require('chai').assert
const materialLocationHelper = require('../src/index').materialLocationHelper

describe('Material Location Tests', function() {

  it('Material Location Test Data', function(done) {
      materialLocationHelper.getMaterialLocationTestData(function (err, materialLocations) {
        if(err) return console.log(err)
        assert.isAtLeast(materialLocations.length, 1)
        done()
      })
  })

})
