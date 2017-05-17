'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getCytologyOtherConditionsTestData: function (callback) {
    var cytologyOtherConditionsTestDataPath = path.join(__dirname, 'cytology-other-conditions-test-data.json')
    fs.readFile(cytologyOtherConditionsTestDataPath, function (err, data) {
      if(err) return callback(err)
      var cytologyOtherConditions = JSON.parse(data)
      callback(null, cytologyOtherConditions)
    })
  }

}
