'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getApplicationVersionTestData: function (callback) {
    var applicationVersionTestDataPath = path.join(__dirname, 'application-version-test-data.json')
    fs.readFile(applicationVersionTestDataPath, function (err, data) {
      if(err) return callback(err)
      var applicationVersions = JSON.parse(data)
      callback(null, applicationVersions)
    })
  }

}
