'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getPhysicianClientTestData: function (callback) {
    var physicianClientTestDataPath = path.join(__dirname, 'physician-client-test-data.json')
    fs.readFile(physicianClientTestDataPath, function (err, data) {
      if(err) return callback(err)
      var physicianClients = JSON.parse(data)
      callback(null, physicianClients)
    })
  }

}
