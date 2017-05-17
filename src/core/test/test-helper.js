'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getTestTestData: function (callback) {
    var testTestDataPath = path.join(__dirname, 'test-test-data.json')
    fs.readFile(testTestDataPath, function (err, data) {
      if(err) return callback(err)
      var tests = JSON.parse(data)
      callback(null, tests)
    })
  }

}
