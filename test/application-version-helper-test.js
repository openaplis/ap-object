'use strict'

const assert = require('chai').assert
const applicationVersionHelper = require('../src/index').applicationVersionHelper

describe('Application Version Helper Tests', function() {

  it('Application Version Test Data', function(done) {
      applicationVersionHelper.getApplicationVersionTestData(function (err, applicationVersions) {
        if(err) return console.log(err)
        assert.isAtLeast(applicationVersions.length, 1)
        done()
      })
  })

})
