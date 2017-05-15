'use strict'

const assert = require('chai').assert
const clientGroupHelper = require('../src/index').clientGroupHelper

describe('Client Group Helper Tests', function() {

  it('Client Group Test Data', function(done) {
      clientGroupHelper.getClientGroupTestData(function (err, clientGroups) {
        if(err) return console.log(err)
        assert.isAtLeast(clientGroups.length, 1)
        done()
      })
  })

})
