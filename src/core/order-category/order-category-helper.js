'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getOrderCategoryTestData: function (callback) {
    var orderCategoryTestDataPath = path.join(__dirname, 'order-category-test-data.json')
    fs.readFile(orderCategoryTestDataPath, function (err, data) {
      if(err) return callback(err)
      var orderCategorys = JSON.parse(data)
      callback(null, orderCategorys)
    })
  }

}
