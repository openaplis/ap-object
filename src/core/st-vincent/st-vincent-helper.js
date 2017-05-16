'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getStVincentTestData: function (callback) {
    var stVincentTestDataPath = path.join(__dirname, 'st-vincent-test-data.json')
    fs.readFile(stVincentTestDataPath, function (err, data) {
      if(err) return callback(err)
      var stVincents = JSON.parse(data)
      callback(null, stVincents)
    })
  }

}
