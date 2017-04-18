'use strict'

const deepDiff = require('deep-diff')
const cmdBuilder = require('ap-mysql').cmdBuilder
const cmdSubmitter = require('ap-mysql').cmdSubmitter

module.exports.update = (ao, aoClone, callback) => {
  var diff = deepDiff(aoClone, ao)
  cmdBuilder.buildUpdateCommands(diff, ao, function (err, statements) {
    //cmdSubmitter.submit(statements[0].cmd)    
    callback(null, 'all done')
  })
}
