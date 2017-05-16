'use strict'

const assert = require('chai').assert
const panelSetHelper = require('../src/index').panelSetHelper

describe('Panel Set Helper Tests', function() {

  it('Panel Set Test Data', function(done) {
      panelSetHelper.getPanelSetTestData(function (err, panelSets) {
        if(err) return console.log(err)
        assert.isAtLeast(panelSets.length, 1)
        done()
      })
  })

})
