'use strict'

const assert = require('chai').assert
const webServiceAccountClientHelper = require('../src/index').webServiceAccountClientHelper

describe('Web Service Account Client Helper Tests', function() {

  it('Web Service Account Client Test Data', function(done) {
      webServiceAccountClientHelper.getWebServiceAccountClientTestData(function (err, webServiceAccountClients) {
        if(err) return console.log(err)
        assert.isAtLeast(webServiceAccountClients.length, 1)
        done()
      })
  })

})
