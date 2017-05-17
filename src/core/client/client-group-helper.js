'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getClientGroupTestData: function (callback) {
    var clientGroupTestDataPath = path.join(__dirname, 'client-group-test-data.json')
    fs.readFile(clientGroupTestDataPath, function (err, data) {
      if(err) return callback(err)
      var clientGroups = JSON.parse(data)
      callback(null, clientGroups)
    })
  }

}
