'use strict'

const assert = require('chai').assert
const orderCategoryHelper = require('../src/index').orderCategoryHelper

describe('Order Category Tests', function() {

  it('Order Category Test Data', function(done) {
      orderCategoryHelper.getOrderCategoryTestData(function (err, orderCategorys) {
        if(err) return console.log(err)
        assert.isAtLeast(orderCategorys.length, 1)
        done()
      })
  })

})
