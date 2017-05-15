'use strict'

const assert = require('chai').assert
const cytologySACommentsHelper = require('../src/index').cytologySACommentsHelper

describe('Cytology Report Comment Helper Tests', function() {

  it('Cytology Report Comment Test Data', function(done) {
      cytologySACommentsHelper.getCytologySACommentsTestData(function (err, cytologySAComments) {
        if(err) return console.log(err)
        assert.isAtLeast(cytologySAComments.length, 1)
        done()
      })
  })

})
