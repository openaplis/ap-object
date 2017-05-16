'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getPanelTestData: function (callback) {
    var panelTestDataPath = path.join(__dirname, 'panel-test-data.json')
    fs.readFile(panelTestDataPath, function (err, data) {
      if(err) return callback(err)
      var panels = JSON.parse(data)
      callback(null, panels)
    })
  }

}
