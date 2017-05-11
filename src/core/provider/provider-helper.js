var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getTestData: function (callback) {
    var providerTestDataPath = path.join(__dirname, 'provider-test-data.json')
    fs.readFile(providerTestDataPath, function (err, data) {
      if(err) return callback(err)
      var providers = JSON.parse(data)
      callback(null, providers)
    })
  }

}
