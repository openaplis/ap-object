'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getHostTestData: function (callback) {
    var hostTestDataPath = path.join(__dirname, 'host-test-data.json')
    fs.readFile(hostTestDataPath, function (err, data) {
      if(err) return callback(err)
      var hosts = JSON.parse(data)
      callback(null, hosts)
    })
  }

}
