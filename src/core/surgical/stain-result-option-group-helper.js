'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getStainResultOptionGroupTestData: function (callback) {
    var stainResultOptionGroupTestDataPath = path.join(__dirname, 'stain-result-option-group-test-data.json')
    fs.readFile(stainResultOptionGroupTestDataPath, function (err, data) {
      if(err) return callback(err)
      var stainResultOptionGroups = JSON.parse(data)
      callback(null, stainResultOptionGroups)
    })
  }

}
