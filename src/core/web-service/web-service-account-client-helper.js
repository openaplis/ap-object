'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getWebServiceAccountClientTestData: function (callback) {
    var webServiceAccountClientTestDataPath = path.join(__dirname, 'web-service-account-client-test-data.json')
    fs.readFile(webServiceAccountClientTestDataPath, function (err, data) {
      if(err) return callback(err)
      var webServiceAccountClients = JSON.parse(data)
      callback(null, webServiceAccountClients)
    })
  }

}
