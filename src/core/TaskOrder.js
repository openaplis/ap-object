var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')

module.exports.new = function (pso, tsk, orderedById, orderedByInitials) {
  var objectId = ObjectId().toString()
  var to = getBlank()
  to.TaskOrder.ObjectId = objectId
  to.TaskOrder.TaskOrderId = objectId
  to.TaskOrder.MasterAccessionNo = pso.PanelSetOrder.MasterAccessionNo
  to.TaskOrder.ReportNo = pso.PanelSetOrder.ReportNo
  to.TaskOrder.PanelSetName = pso.PanelSetOrder.PanelSetName
  to.TaskOrder.TaskName = tsk.Task.TaskName
  to.TaskOrder.OrderDate = moment().format('YYYY-MM-DD HH:mm:ss')
  to.TaskOrder.OrderedById = orderedById
  to.TaskOrder.OrderedByInitials = orderedByInitials
  to.TaskOrder.TaskOrderDetails = []
  return to
}

module.exports.blank = function () {
  return getBlank();
}

module.exports.nextId = function(masterAccessionNo, taskOrders, callback) {
  if(!Array.isArray(taskOrders)) callback({ err: 'taskOrders must be an array.' })
  if(masterAccessionNo == null) callback({ err: 'masterAccessionNo cannot be null' })

  var prefix = 'TSK'
  var nextId = null
  if(taskOrders.length == 0) {
    nextId = masterAccessionNo + '.' + prefix + '01'
  } else {
    var lastTaskOrder = _.maxBy(taskOrders, function (o) { return o.TaskOrder.TaskOrderId })
    var nmbr = parseInt(nextId.substr(lastTaskOrder.TaskOrder.TaskOrderId.length - 2))
    console.log(nmbr)
    //var nmbrPadded = String('0' + nmbr).slice(-2)
    //nextId = masterAccessionNo + '.' + prefix + nmbrPadded
    //console.log(nextId)
  }
  callback(null, nextId)
}

function getBlank() {
  return {
    TaskOrder: {
      ObjectId: null,
      TaskOrderId: null,
      MasterAccessionNo: null,
      ReportNo: null,
      PanelSetName: null,
      TaskName: null,
      OrderDate: null,
      OrderedById: null,
      OrderedByInitials: null,
      TaskOrderDetails: []
    }
  }
}
