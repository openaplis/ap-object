const assert = require('chai').assert
const providerHelper = require('../src/index').providerHelper

describe('Provider Helper Tests', function() {

  it('Provider Test Data', function(done) {
      providerHelper.getTestData(function (err, providers) {
        if(err) return console.log(err)
        assert.isAtLeast(providers.length, 1)
        done()
      })
  })

})
