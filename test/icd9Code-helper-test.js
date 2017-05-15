'use strict'

const assert = require('chai').assert
const icd9CodeHelper = require('../src/index').icd9CodeHelper

describe('ICD9Code Tests', function() {

  it('ICD9Code Test Data', function(done) {
      icd9CodeHelper.getICD9CodeTestData(function (err, icd9Codes) {
        if(err) return console.log(err)
        assert.isAtLeast(icd9Codes.length, 1)
        done()
      })
  })

})
