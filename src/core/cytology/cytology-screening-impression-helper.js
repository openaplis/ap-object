'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getCytologyScreeningImpressionTestData: function (callback) {
    var cytologyScreeningImpressionTestDataPath = path.join(__dirname, 'cytology-screening-impression-test-data.json')
    fs.readFile(cytologyScreeningImpressionTestDataPath, function (err, data) {
      if(err) return callback(err)
      var cytologyScreeningImpressions = JSON.parse(data)
      callback(null, cytologyScreeningImpressions)
    })
  }

}
