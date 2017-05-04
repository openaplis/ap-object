'use strict'

const ObjectId = require('bson-objectid')
const moment = require('moment')
const _ = require('lodash')

var self = module.exports = {

  createTaskOrderDetail: function (taskOrder, task, callback) {
    var objectId = ObjectId().toString()
    self.getNextId(taskOrder.taskOrderId, taskOrder.taskOrderDetails, function (err, nextId) {
      if(err) return callback(err)
      var tod = self.createBlankTaskOrderDetail()
      tod.taskOrderDetail.taskOrderDetailId = nextId,
      tod.taskOrderDetail.taskOrderId = taskOrder.taskOrderId,
      tod.taskOrderDetail.objectId = objectId,
      tod.taskOrderDetail.taskId = task.taskId,
      tod.taskOrderDetail.description = task.description,
      tod.taskOrderDetail.assignedTo = task.assignedTo
      callback(null, tod)
    })
  },

  createBlankTaskOrderDetail: function () {
    var tod = {
      taskOrderDetail: {
        taskOrderDetailId: null,
        taskOrderId: null,
        objectId: null,
        taskId:null,
        description: null,
        assignedTo: null
      }
    }
    return tod
  },

  getNextId: function(to, callback) {
    if(to == null) return callback({ err: 'The TaskOrder cannot be null' })
    if(!Array.isArray(to.taskOrder.taskOrderDetails)) return callback({ err: 'TaskOrderDetails must be an array.' })

    var prefix = 'TSKOD'
    var nextId = null

    if(to.taskOrder.taskOrderDetails.length == 0) {
      nextId = to.taskOrder.taskOrderId + '.' + prefix + '1'
    } else {
      var lastTaskOrderDetail = _.maxBy(to.taskOrder.taskOrderDetails, function (o) {
        return parseInt(o.taskOrderDetail.taskOrderDetailId.substr(to.taskOrder.taskOrderId.length + 5, o.taskOrderDetail.taskOrderDetailId.length - 1))
      })

      var lastTaskOrderDetailId = lastTaskOrderDetail.taskOrderDetail.taskOrderDetailId
      var nmbr = parseInt(lastTaskOrderDetailId.substr(taskOrderId.length + 5, lastTaskOrderDetailId.length - 1)) + 1
      nextId = to.taskOrder.taskOrderId + '.' + prefix + nmbr
    }
    callback(null, nextId)
  }
}
