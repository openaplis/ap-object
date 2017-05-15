'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getImmunoCommentTestData: function (callback) {
    var immunoCommentTestDataPath = path.join(__dirname, 'immunoComment-test-data.json')
    fs.readFile(immunoCommentTestDataPath, function (err, data) {
      if(err) return callback(err)
      var immunoComments = JSON.parse(data)
      callback(null, immunoComments)
    })
  }

}
