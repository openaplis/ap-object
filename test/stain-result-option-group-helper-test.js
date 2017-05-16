'use strict'

const assert = require('chai').assert
const stainResultOptionGroupHelper = require('../src/index').stainResultOptionGroupHelper

describe('Stain Result Option Group Helper Tests', function() {

  it('Stain Result Option Group Test Data', function(done) {
      stainResultOptionGroupHelper.getStainResultOptionGroupTestData(function (err, stainResultOptionGroups) {
        if(err) return console.log(err)
        assert.isAtLeast(stainResultOptionGroups.length, 1)
        done()
      })
  })

})
