'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getSystemRoleTestData: function (callback) {
    var systemRoleTestDataPath = path.join(__dirname, 'system-role-test-data.json')
    fs.readFile(systemRoleTestDataPath, function (err, data) {
      if(err) return callback(err)
      var systemRoles = JSON.parse(data)
      callback(null, systemRoles)
    })
  }

}
