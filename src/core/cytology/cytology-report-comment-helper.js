'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getCytologyReportCommentTestData: function (callback) {
    var cytologyReportCommentTestDataPath = path.join(__dirname, 'cytology-report-comment-test-data.json')
    fs.readFile(cytologyReportCommentTestDataPath, function (err, data) {
      if(err) return callback(err)
      var cytologyReportComments = JSON.parse(data)
      callback(null, cytologyReportComments)
    })
  }

}
