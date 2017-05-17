'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getSystemUserTestData: function (callback) {
    var systemUserTestDataPath = path.join(__dirname, 'system-user-test-data.json')
    fs.readFile(systemUserTestDataPath, function (err, data) {
      if(err) return callback(err)
      var systemUsers = JSON.parse(data)
      callback(null, systemUsers)
    })
  }

}
