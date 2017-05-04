const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const taskOrderDetailHelper = require('../src/core/task/task-order-detail-helper')
const tsk = require('../src/core/task/task-generic')

var testAO = null;
var masterAccessionNo = '17-8171'
var taskPrefix = 'TSKOD'

describe('Task Order Detail Object Tests', function() {

  before(function(done) {
    var testDataPath = path.resolve('./test/test-data.17-10925.json')
    fs.readFile(testDataPath, function (err, data) {
      testAO = JSON.parse(data)
      done()
    })
  })

  describe('NextId Tests', function() {

    it('Should return error if TaskOrder is null', function(done) {
      taskOrderDetailHelper.getNextId(null, function (err, nextId) {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return error if TaskOrderDetails is not an array', function(done) {
      var to = testAO.accessionOrder.panelSetOrders[0].panelSetOrder.taskOrders[0]
      to.taskOrder.taskOrderDetails = 'This is not an array'
      taskOrderDetailHelper.getNextId(to, function (err, nextId) {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return error if Task is null', function(done) {
      var to = testAO.accessionOrder.panelSetOrders[0].panelSetOrder.taskOrders[0]
      taskOrderDetailHelper.getNextId(to, function (err, nextId) {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return 1st ID if TaskOderDetails is an empty array', function(done) {
      var to = testAO.accessionOrder.panelSetOrders[0].panelSetOrder.taskOrders[0]
      to.taskOrder.taskOrderDetails = []
      taskOrderDetailHelper.getNextId(to, function (err, nextId) {
        if(err) return console.log(err)
        assert.equal(nextId, to.taskOrder.taskOrderId + '.' + taskPrefix + '1')
        done()
      })
    })

  })
})
