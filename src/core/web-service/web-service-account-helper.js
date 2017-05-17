'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getWebServiceAccountTestData: function (callback) {
    var webServiceAccountTestDataPath = path.join(__dirname, 'web-service-account-test-data.json')
    fs.readFile(webServiceAccountTestDataPath, function (err, data) {
      if(err) return callback(err)
      var webServiceAccounts = JSON.parse(data)
      callback(null, webServiceAccounts)
    })
  }

}
