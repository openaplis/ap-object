var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')

var self = module.exports = {

  createTaskOrder:  function ({
    pso = null,
    tsk = null,
    orderedById = null,
    orderedByInitials = null
  }, callback) {
    var objectId = ObjectId().toString()
    self.getNextId({
      masterAccessionNo: pso.panelSetOrder.masterAccessionNo,
      taskOrders: pso.panelSetOrder.taskOrders
    }, function (err, nextId) {
      if(err) return callback(err)
      var to = self.createBlankTaskOrder()
      to.taskOrder.objectId = objectId
      to.taskOrder.taskOrderId = nextId
      to.taskOrder.masterAccessionNo = pso.panelSetOrder.masterAccessionNo
      to.taskOrder.reportNo = pso.panelSetOrder.reportNo
      to.taskOrder.panelSetName = pso.panelSetOrder.panelSetName
      to.taskOrder.taskName = tsk.task.taskName
      to.taskOrder.orderDate = moment().format('YYYY-MM-DD HH:mm:ss')
      to.taskOrder.orderedById = orderedById
      to.taskOrder.orderedByInitials = orderedByInitials
      to.taskOrder.taskOrderDetails = []
      callback(null, to)
    })
  },

  createBlankTaskOrder: function () {
    var to = {
      taskOrder: {
        objectId: null,
        taskOrderId: null,
        masterAccessionNo: null,
        reportNo: null,
        panelSetName: null,
        taskName: null,
        orderDate: null,
        orderedById: null,
        orderedByInitials: null,
        taskOrderDetails: []
      }
    }
    return to
  },

  getNextId: function({
    masterAccessionNo = null,
    taskOrders = null
  }, callback) {
    if(!Array.isArray(taskOrders)) return callback({ err: 'taskOrders must be an array.' })
    if(masterAccessionNo == null) return callback({ err: 'masterAccessionNo cannot be null' })

    var prefix = 'TSKO'
    var nextId = null
    if(taskOrders.length == 0) {
      nextId = masterAccessionNo + '.' + prefix + '1'
    } else {
      var lastTaskOrder = _.maxBy(taskOrders, function (o) {
        return parseInt(o.taskOrder.taskOrderId.substr(masterAccessionNo.length + 5, o.taskOrder.taskOrderId.length - 1))
      })

      var lastTaskOrderId = lastTaskOrder.taskOrder.taskOrderId
      var nmbr = parseInt(lastTaskOrderId.substr(masterAccessionNo.length + 5, lastTaskOrderId.length - 1)) + 1
      nextId = masterAccessionNo + '.' + prefix + nmbr
    }
    callback(null, nextId)
  }

}
