'use strict'

const fs = require('fs')
const assert = require('assert')
const path = require('path')
const clone = require('clone')
const deepDiff = require('deep-diff')

const aoUpdater = require('../src/core/ao-updater')
const taskOrderCreator = require('../src/core/task-order-creator')

var testAO = null;

describe('aoUpdater', function() {

  before(function(done) {
    var testDataPath = './test/test-data.17-8171.json'
    fs.readFile(testDataPath, function (err, data) {
      testAO = JSON.parse(data)
      done()
    })
  })

  describe('update', function() {
    it('Testing the updater.', function(done) {
      var aoClone = clone(testAO)

      var values = {
        TaskName: 'Breast Fixation Check',
        OrderedById: 5134,
        OrderedByInitials: 'OP'
      }

      testAO.AccessionOrder.PLastName = 'DUCK'
      testAO.AccessionOrder.PanelSetOrders[0].PanelSetOrder.PanelSetName = 'Going to the sun.'
      taskOrderCreator.create(testAO.AccessionOrder.PanelSetOrders[0], values, function (err, to) {
        testAO.AccessionOrder.PanelSetOrders[0].PanelSetOrder.TaskOrders.push(to)
        aoUpdater.update(testAO, aoClone, function (err, result) {
          assert.equal(err, null)
          done()
        })
      })

    })
  })
})
