'use strict'

const assert = require('chai').assert
const webServiceAccountHelper = require('../src/index').webServiceAccountHelper

describe('Web Service Account Helper Tests', function() {

  it('Web Service Account Test Data', function(done) {
      webServiceAccountHelper.getWebServiceAccountTestData(function (err, webServiceAccounts) {
        if(err) return console.log(err)
        assert.isAtLeast(webServiceAccounts.length, 1)
        done()
      })
  })

})
