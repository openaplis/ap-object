'use strict'

const assert = require('chai').assert
const flowMarkerPanelHelper = require('../src/index').flowMarkerPanelHelper

describe('Flow Marker Panel Tests', function() {

  it('Flow Marker Panel Test Data', function(done) {
      flowMarkerPanelHelper.getFlowMarkerPanelTestData(function (err, flowMarkerPanels) {
        if(err) return console.log(err)
        assert.isAtLeast(flowMarkerPanels.length, 1)
        done()
      })
  })

})
