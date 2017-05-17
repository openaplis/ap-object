'use strict'

const assert = require('chai').assert
const cytologyScreeningImpressionHelper = require('../src/index').cytologyScreeningImpressionHelper

describe('Cytology Screening Impression Helper Tests', function() {

  it('Cytology Screening Impression Test Data', function(done) {
      cytologyScreeningImpressionHelper.getCytologyScreeningImpressionTestData(function (err, cytologyScreeningImpressions) {
        if(err) return console.log(err)
        assert.isAtLeast(cytologyScreeningImpressions.length, 1)
        done()
      })
  })

})
