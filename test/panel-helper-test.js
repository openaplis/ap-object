'use strict'

const assert = require('chai').assert
const panelHelper = require('../src/index').panelHelper

describe('Panel Helper Tests', function() {

  it('Panel Test Data', function(done) {
      panelHelper.getPanelTestData(function (err, panels) {
        if(err) return console.log(err)
        assert.isAtLeast(panels.length, 1)
        done()
      })
  })

})
