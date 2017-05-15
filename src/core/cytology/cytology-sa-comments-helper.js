'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getCytologySACommentsTestData: function (callback) {
    var cytologySACommentsTestDataPath = path.join(__dirname, 'cytology-sa-comments-test-data.json')
    fs.readFile(cytologySACommentsTestDataPath, function (err, data) {
      if(err) return callback(err)
      var cytologySAComments = JSON.parse(data)
      callback(null, cytologySAComments)
    })
  }

}
