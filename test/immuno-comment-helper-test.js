'use strict'

const assert = require('chai').assert
const immunoCommentHelper = require('../src/index').immunoCommentHelper

describe('ImmunoComment Tests', function() {

  it('ImmunoComment Test Data', function(done) {
      immunoCommentHelper.getImmunoCommentTestData(function (err, immunoComments) {
        if(err) return console.log(err)
        assert.isAtLeast(immunoComments.length, 1)
        done()
      })
  })

})
