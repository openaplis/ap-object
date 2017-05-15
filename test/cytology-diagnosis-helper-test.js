'use strict'

const assert = require('chai').assert
const cytologyDiagnosisHelper = require('../src/index').cytologyDiagnosisHelper

describe('Cytology Diagnosis Helper Tests', function() {

  it('Cytology Diagnosis Test Data', function(done) {
      cytologyDiagnosisHelper.getCytologyDiagnosisTestData(function (err, cytologyDiagnosi) {
        if(err) return console.log(err)
        assert.isAtLeast(cytologyDiagnosi.length, 1)
        done()
      })
  })

})
