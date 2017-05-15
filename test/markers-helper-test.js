'use strict'

const assert = require('chai').assert
const markersHelper = require('../src/index').markersHelper

describe('Markers Tests', function() {

  it('Markers Test Data', function(done) {
      markersHelper.getMarkersTestData(function (err, markers) {
        if(err) return console.log(err)
        assert.isAtLeast(markers.length, 1)
        done()
      })
  })

})
