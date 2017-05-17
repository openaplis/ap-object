'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getFlowMarkerPanelTestData: function (callback) {
    var flowMarkerPanelTestDataPath = path.join(__dirname, 'flow-marker-panel-test-data.json')
    fs.readFile(flowMarkerPanelTestDataPath, function (err, data) {
      if(err) return callback(err)
      var flowMarkerPanels = JSON.parse(data)
      callback(null, flowMarkerPanels)
    })
  }

}
