var cmdBuilder = require('ap-mysql').cmdBuilder
var cmdSubmitter = require('ap-mysql').cmdSubmitter

module.exports.update = (ao, clone, callback) => {
  cmdBuilder.buildUpdateCommands(diff, ao, function (err, statements) {
    //cmdSubmitter.submit(statements[0].cmd)
    console.log(statements)
    callback(null, 'all done')
  })
}
