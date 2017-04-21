var ObjectId = require('bson-objectid')
var moment = require('moment')

module.exports.new = (taskOrder, task) => {
  var objectId = ObjectId().toString()

  var tod = {
    TaskOrderDetail: {
      TaskOrderDetailId: objectId,
      TaskOrderId: taskOrder.TaskOrderId,
      ObjectId: objectId,
      TaskId: task.TaskId,
      Description: task.Description,
      AssignedTo: task.AssignedTo
    }
  }

  return tod
}
