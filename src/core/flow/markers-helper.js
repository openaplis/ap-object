'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getMarkersTestData: function (callback) {
    var markersTestDataPath = path.join(__dirname, 'markers-test-data.json')
    fs.readFile(markersTestDataPath, function (err, data) {
      if(err) return callback(err)
      var markers = JSON.parse(data)
      callback(null, markers)
    })
  }

}
