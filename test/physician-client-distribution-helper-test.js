'use strict'

const assert = require('chai').assert
const physicianClientDistributionHelper = require('../src/index').physicianClientDistributionHelper

describe('Physician Client Distribution Helper Tests', function() {

  it('Physician Client Distributon Test Data', function(done) {
      physicianClientDistributionHelper.getPhysicianClientDistributionTestData(function (err, physicianClientDistributions) {
        if(err) return console.log(err)
        assert.isAtLeast(physicianClientDistributions.length, 1)
        done()
      })
  })

})
