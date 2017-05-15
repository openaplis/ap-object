'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getClientLocationTestData: function (callback) {
    var clientLocationTestDataPath = path.join(__dirname, 'client-location-test-data.json')
    fs.readFile(clientLocationTestDataPath, function (err, data) {
      if(err) return callback(err)
      var clientLocations = JSON.parse(data)
      callback(null, clientLocations)
    })
  }

}
