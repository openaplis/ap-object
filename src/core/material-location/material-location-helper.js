'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getMaterialLocationTestData: function (callback) {
    var materialLocationTestDataPath = path.join(__dirname, 'material-location-test-data.json')
    fs.readFile(materialLocationTestDataPath, function (err, data) {
      if(err) return callback(err)
      var materialLocations = JSON.parse(data)
      callback(null, materialLocations)
    })
  }

}
