const assert = require('chai').assert
const path = require('path')
const fs = require('fs')
const taskOrderHelper = require('../src/core/task/task-order-helper')
const tsk = require('../src/core/task/task-generic')

var testAO = null;
var masterAccessionNo = '17-8171'
var taskPrefix = 'TSKO'

describe('Task Order Helper Tests', function() {

  before(function(done) {
    var testDataPath = path.resolve('./test/test-data.17-8171.json')
    fs.readFile(testDataPath, function (err, data) {
      testAO = JSON.parse(data)
      done()
    })
  })

  describe('Create Task Order', function() {
    it('Is data being passed in correctly', function(done) {
      taskOrderHelper.createTaskOrder({
        pso: testAO.accessionOrder.panelSetOrders[0],
        tsk: tsk,
        orderedById: 9999,
        orderedByInitials: 'OP'}, function (err, to) {
        assert.equal(to.taskOrder.masterAccessionNo, '17-8171', 'The MasterAccessionNo is not corret.')
        assert.equal(to.taskOrder.taskName, tsk.task.taskName, 'The Task name is not correct.')
        done()
      })
    })
  })


  describe('NextId Tests', function() {

    it('Should return error if MasterAccessionNo is null', function(done) {
      taskOrderHelper.getNextId({
        masterAccessionNo: null,
        taskOrder: [1,2,3]
      }, function (err, nextId) {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return error if TestOrders is not an array', function(done) {
      taskOrderHelper.getNextId({
        masterAccessionNo: masterAccessionNo,
        taskOrders: 123
      }, function (err, nextId) {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return 1st ID if TestOders is an empty array', function(done) {
      taskOrderHelper.getNextId({
        masterAccessionNo: masterAccessionNo,
        taskOrders: []
      }, function (err, nextId) {
        assert.equal(nextId, masterAccessionNo + '.' + taskPrefix + '1')
        done()
      })
    })

  })

  it('Should return 2nd ID if TestOders has 1 item', function(done) {
    var to1 = taskOrderHelper.createBlankTaskOrder()
    to1.taskOrder.taskOrderId = masterAccessionNo + '.' + taskPrefix + '1'
    var taskOrders = [to1]

    taskOrderHelper.getNextId({
      masterAccessionNo: masterAccessionNo,
      taskOrders: taskOrders
    }, function (err, nextId) {
      assert.equal(nextId, masterAccessionNo + '.' + taskPrefix + '2')
      done()
    })
  })

  it('Does it work with 11 TaskOrders?', function(done) {
    var taskOrders = []
    var i = 1
    while (i <= 11) {
      var to = taskOrderHelper.createBlankTaskOrder()
      to.taskOrder.taskOrderId = masterAccessionNo + '.' + taskPrefix + i
      taskOrders.push(to)
      i ++
    }

    taskOrderHelper.getNextId({
      masterAccessionNo: masterAccessionNo,
      taskOrders: taskOrders
    }, function (err, nextId) {
      assert.equal(nextId, masterAccessionNo + '.' + taskPrefix + '12')
      done()
    })
  })

})
