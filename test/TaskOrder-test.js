const assert = require('assert')
const path = require('path')
const fs = require('fs')
const taskOrderCreator = require('../src/core/object/TaskOrder')

var testAO = null;

describe('task order creator', function() {

  before(function(done) {
    var testDataPath = path.resolve('./test/test-data.17-8171.json')
    fs.readFile(testDataPath, function (err, data) {
      testAO = JSON.parse(data)
      done()
    })
  })

  describe('create', function() {
    it('Testing the task order creator.', function(done) {

      var values = {
        TaskName: 'Breast Fixation Check',
        OrderedById: 5134,
        OrderedByInitials: 'OP'
      }

      var to = taskOrderCreator.construct(testAO.AccessionOrder.PanelSetOrders[0], values)
      assert.equal(to.TaskOrder.MasterAccessionNo, '17-8171', 'The MasterAccessionNo is not corret.')
      assert.equal(to.TaskOrder.TaskName, values.TaskName, 'The Task name is not correct.')
      done()
    })
  })
})
