'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getStainTestTestData: function (callback) {
    var stainTestTestDataPath = path.join(__dirname, 'stain-test-test-data.json')
    fs.readFile(stainTestTestDataPath, function (err, data) {
      if(err) return callback(err)
      var stainTests = JSON.parse(data)
      callback(null, stainTests)
    })
  }

}
