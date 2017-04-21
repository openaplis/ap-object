const assert = require('chai').assert
const path = require('path')
const fs = require('fs')
const taskOrder = require('../src/core/TaskOrder')
const tsk = require('../src/core/Task-Generic')

var testAO = null;
var masterAccessionNo = '17-8171'
var prefix = 'TSK'

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
      var to = taskOrder.new(testAO.AccessionOrder.PanelSetOrders[0], tsk, 9999, 'OP')
      assert.equal(to.TaskOrder.MasterAccessionNo, '17-8171', 'The MasterAccessionNo is not corret.')
      assert.equal(to.TaskOrder.TaskName, tsk.Task.TaskName, 'The Task name is not correct.')
      done()
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
        assert.notEqual(nextId, masterAccessionNo + '.' + prefix + '01')
        done()
      })
    })

    it('Should return 2nd ID if TestOders has 1 item', function(done) {
      var to1 = taskOrder.blank()
      to1.TaskOrder.TaskOrderId = masterAccessionNo + '.' + prefix + '01'
      var taskOrders = [to1]

      taskOrder.nextId(masterAccessionNo, taskOrders, function (err, nextId) {
        assert.notEqual(nextId, masterAccessionNo + '.' + prefix + '01')
        done()
      })
    })

  })
})
