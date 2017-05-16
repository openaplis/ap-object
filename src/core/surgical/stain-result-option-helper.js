'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getStainResultOptionTestData: function (callback) {
    var stainResultOptionTestDataPath = path.join(__dirname, 'stain-result-option-test-data.json')
    fs.readFile(stainResultOptionTestDataPath, function (err, data) {
      if(err) return callback(err)
      var stainResultOptions = JSON.parse(data)
      callback(null, stainResultOptions)
    })
  }

}
