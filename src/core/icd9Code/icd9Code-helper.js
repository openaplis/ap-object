'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getICD9CodeTestData: function (callback) {
    var icd9CodeTestDataPath = path.join(__dirname, 'icd9code-test-data.json')
    fs.readFile(icd9CodeTestDataPath, function (err, data) {
      if(err) return callback(err)
      var icd9Codes = JSON.parse(data)
      callback(null, icd9Codes)
    })
  }

}
