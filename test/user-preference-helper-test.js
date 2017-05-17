'use strict'

const assert = require('chai').assert
const userPreferenceHelper = require('../src/index').userPreferenceHelper

describe('User Preference Helper Tests', function() {

  it('User Preference Test Data', function(done) {
      userPreferenceHelper.getUserPreferenceTestData(function (err, userPreferences) {
        if(err) return console.log(err)
        assert.isAtLeast(userPreferences.length, 1)
        done()
      })
  })

})
