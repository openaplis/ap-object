'use strict'

const assert = require('chai').assert
const orderTypeHelper = require('../src/index').orderTypeHelper

describe('Order Type Tests', function() {

  it('Order Type Test Data', function(done) {
      orderTypeHelper.getOrderTypeTestData(function (err, orderTypes) {
        if(err) return console.log(err)
        assert.isAtLeast(orderTypes.length, 1)
        done()
      })
  })

})
