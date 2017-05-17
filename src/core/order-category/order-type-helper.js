'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getOrderTypeTestData: function (callback) {
    var orderTypeTestDataPath = path.join(__dirname, 'order-type-test-data.json')
    fs.readFile(orderTypeTestDataPath, function (err, data) {
      if(err) return callback(err)
      var orderTypes = JSON.parse(data)
      callback(null, orderTypes)
    })
  }

}
