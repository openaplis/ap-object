'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getPhysicianClientDistributionTestData: function (callback) {
    var physicianClientDistributionTestDataPath = path.join(__dirname, 'physician-client-distribution-test-data.json')
    fs.readFile(physicianClientDistributionTestDataPath, function (err, data) {
      if(err) return callback(err)
      var physicianClientDistributions = JSON.parse(data)
      callback(null, physicianClientDistributions)
    })
  }

}
