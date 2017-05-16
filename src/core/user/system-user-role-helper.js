'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getSystemUserRoleTestData: function (callback) {
    var systemUserRoleTestDataPath = path.join(__dirname, 'system-user-role-test-data.json')
    fs.readFile(systemUserRoleTestDataPath, function (err, data) {
      if(err) return callback(err)
      var systemUserRoles = JSON.parse(data)
      callback(null, systemUserRoles)
    })
  }

}
