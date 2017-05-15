'use strict'

const assert = require('chai').assert
const flowPanelHelper = require('../src/index').flowPanelHelper

describe('Flow Panel Tests', function() {

  it('Flow Panel Test Data', function(done) {
      flowPanelHelper.getFlowPanelTestData(function (err, flowPanels) {
        if(err) return console.log(err)
        assert.isAtLeast(flowPanels.length, 1)
        done()
      })
  })

})
