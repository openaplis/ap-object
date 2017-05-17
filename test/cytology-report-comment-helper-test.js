'use strict'

const assert = require('chai').assert
const cytologyReportCommentHelper = require('../src/index').cytologyReportCommentHelper

describe('Cytology Report Comment Helper Tests', function() {

  it('Cytology Report Comment Test Data', function(done) {
      cytologyReportCommentHelper.getCytologyReportCommentTestData(function (err, cytologyReportComments) {
        if(err) return console.log(err)
        assert.isAtLeast(cytologyReportComments.length, 1)
        done()
      })
  })

})
