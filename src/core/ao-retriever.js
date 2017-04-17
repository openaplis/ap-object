'use strict'

var cmdSubmitter = require('ap-mysql').cmdSubmitter
var aoBuilder = require('./aoBuilder')


module.exports.retrieve = (masterAccessionNo, callback) => {
  var sql = 'Set @MasterAccessionNo = \'' + masterAccessionNo + '\'; CALL prcGetAccessionOrder(@MasterAccessionNo);'
  cmdSubmitter.submit(sql, function (err, rows) {
    aoBuilder.build(rows, function (err, ao) {
      callback(null, ao)
    })
  })
}
