'use strict'

const assert = require('chai').assert
const stainResultOptionHelper = require('../src/index').stainResultOptionHelper

describe('Stain Result Option Helper Tests', function() {

  it('Stain Result Option Test Data', function(done) {
      stainResultOptionHelper.getStainResultOptionTestData(function (err, stainResultOptions) {
        if(err) return console.log(err)
        assert.isAtLeast(stainResultOptions.length, 1)
        done()
      })
  })

})
