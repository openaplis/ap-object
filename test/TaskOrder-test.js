const assert = require('chai').assert
const path = require('path')
const fs = require('fs')
const taskOrder = require('../src/core/TaskOrder')
const tsk = require('../src/core/Task-Generic')

var testAO = null;
var masterAccessionNo = '17-8171'
var taskPrefix = 'TSKO'

describe('Task Order Object Tests', function() {

  before(function(done) {
    var testDataPath = path.resolve('./test/test-data.17-8171.json')
    fs.readFile(testDataPath, function (err, data) {
      testAO = JSON.parse(data)
      done()
    })
  })

  describe('New Tests', function() {
    it('Is data being passed in correctly', function(done) {
      var to = taskOrder.newItem(testAO.AccessionOrder.PanelSetOrders[0], tsk, 9999, 'OP', function (err, to) {
        assert.equal(to.TaskOrder.MasterAccessionNo, '17-8171', 'The MasterAccessionNo is not corret.')
        assert.equal(to.TaskOrder.TaskName, tsk.Task.TaskName, 'The Task name is not correct.')
        done()
      })
    })
  })

  describe('NextId Tests', function() {

    it('Should return error if MasterAccessionNo is null', function(done) {
      taskOrder.nextId(null, [1,2,3], function (err, nextId) {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return error if TestOrders is not an array', function(done) {
      taskOrder.nextId(masterAccessionNo, 123, function (err, nextId) {
        assert.notEqual(err, null)
        done()
      })
    })

    it('Should return 1st ID if TestOders is an empty array', function(done) {
      taskOrder.nextId(masterAccessionNo, [], function (err, nextId) {
        assert.equal(nextId, masterAccessionNo + '.' + taskPrefix + '1')
        done()
      })
    })

    it('Should return 2nd ID if TestOders has 1 item', function(done) {
      var to1 = taskOrder.blankItem()
      to1.TaskOrder.TaskOrderId = masterAccessionNo + '.' + taskPrefix + '1'
      var taskOrders = [to1]

      taskOrder.nextId(masterAccessionNo, taskOrders, function (err, nextId) {
        assert.equal(nextId, masterAccessionNo + '.' + taskPrefix + '2')
        done()
      })
    })

    it('Does it work with 11 TaskOrders?', function(done) {
      var taskOrders = []
      var i = 1
      while (i <= 11) {
        var to = taskOrder.blankItem()
        to.TaskOrder.TaskOrderId = masterAccessionNo + '.' + taskPrefix + i
        taskOrders.push(to)
        i ++
      }

      taskOrder.nextId(masterAccessionNo, taskOrders, function (err, nextId) {
        assert.equal(nextId, masterAccessionNo + '.' + taskPrefix + '12')
        done()
      })
    })

  })
})
