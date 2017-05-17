'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getFlowPanelTestData: function (callback) {
    var flowPanelTestDataPath = path.join(__dirname, 'flow-panel-test-data.json')
    fs.readFile(flowPanelTestDataPath, function (err, data) {
      if(err) return callback(err)
      var flowPanels = JSON.parse(data)
      callback(null, flowPanels)
    })
  }

}
