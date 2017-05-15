'use strict'

const assert = require('chai').assert
const cytologyOtherConditionsHelper = require('../src/index').cytologyOtherConditionsHelper

describe('Cytology Other Conditions Helper Tests', function() {

  it('Cytology Other Conditions Test Data', function(done) {
      cytologyOtherConditionsHelper.getCytologyOtherConditionsTestData(function (err, cytologyOtherConditions) {
        if(err) return console.log(err)
        assert.isAtLeast(cytologyOtherConditions.length, 1)
        done()
      })
  })

})
