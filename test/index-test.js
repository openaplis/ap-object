'use strict'

const assert = require('chai').assert
const taskOrderHelper = require('../src/index').taskOrderHelper
const taskOrderDetailHelper = require('../src/index').taskOrderDetailHelper

describe('Index Test', function() {

  it('Task Order Helper Should Not be null', function(done) {
    assert.isNotNull(taskOrderHelper)
    done()
  })

  it('Task Order Detail Helper Should Not be null', function(done) {
    assert.isNotNull(taskOrderDetailHelper)
    done()
  })

})
