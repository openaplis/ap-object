var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getClientTestData: function (callback) {
    var clientTestDataPath = path.join(__dirname, 'client-test-data.json')
    fs.readFile(clientTestDataPath, function (err, data) {
      if(err) return callback(err)
      var clients = JSON.parse(data)
      callback(null, clients)
    })
  },

  getClientLocationTestData: function (callback) {
    var clientTestDataPath = path.join(__dirname, 'client-test-data.json')
    fs.readFile(clientTestDataPath, function (err, data) {
      if(err) return callback(err)
      var clients = JSON.parse(data)
      callback(null, clients)
    })
  }  

}
