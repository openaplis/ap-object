'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getCytologyDiagnosisTestData: function (callback) {
    var cytologyDiagnosisTestDataPath = path.join(__dirname, 'cytology-diagnosis-test-data.json')
    fs.readFile(cytologyDiagnosisTestDataPath, function (err, data) {
      if(err) return callback(err)
      var cytologyDiagnosi = JSON.parse(data)
      callback(null, cytologyDiagnosi)
    })
  }

}
