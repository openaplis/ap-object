'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getPanelSetTestData: function (callback) {
    var panelSetTestDataPath = path.join(__dirname, 'panel-set-test-data.json')
    fs.readFile(panelSetTestDataPath, function (err, data) {
      if(err) return callback(err)
      var panelSets = JSON.parse(data)
      callback(null, panelSets)
    })
  }

}
