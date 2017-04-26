var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')

var self = module.exports = {

  newItem:  function (pso, tsk, orderedById, orderedByInitials, callback) {
    var objectId = ObjectId().toString()
    self.nextId(pso.PanelSetOrder.MasterAccessionNo, pso.PanelSetOrder.TaskOrders, function (err, nextId) {
      if(err) return callback(err)
      var to = self.blankItem()
      to.TaskOrder.ObjectId = objectId
      to.TaskOrder.TaskOrderId = nextId
      to.TaskOrder.MasterAccessionNo = pso.PanelSetOrder.MasterAccessionNo
      to.TaskOrder.ReportNo = pso.PanelSetOrder.ReportNo
      to.TaskOrder.PanelSetName = pso.PanelSetOrder.PanelSetName
      to.TaskOrder.TaskName = tsk.Task.TaskName
      to.TaskOrder.OrderDate = moment().format('YYYY-MM-DD HH:mm:ss')
      to.TaskOrder.OrderedById = orderedById
      to.TaskOrder.OrderedByInitials = orderedByInitials
      to.TaskOrder.TaskOrderDetails = []
      callback(null, to)
    })
  },

  blankItem: function () {
    var to = {
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
    return to
  },

  nextId: function(masterAccessionNo, taskOrders, callback) {
    if(!Array.isArray(taskOrders)) callback({ err: 'taskOrders must be an array.' })
    if(masterAccessionNo == null) callback({ err: 'masterAccessionNo cannot be null' })

    var prefix = 'TSKO'
    var nextId = null
    if(taskOrders.length == 0) {
      nextId = masterAccessionNo + '.' + prefix + '1'
    } else {
      var lastTaskOrder = _.maxBy(taskOrders, function (o) {
        return parseInt(o.TaskOrder.TaskOrderId.substr(masterAccessionNo.length + 5, o.TaskOrder.TaskOrderId.length - 1))
      })

      var lastTaskOrderId = lastTaskOrder.TaskOrder.TaskOrderId
      var nmbr = parseInt(lastTaskOrderId.substr(masterAccessionNo.length + 5, lastTaskOrderId.length - 1)) + 1      
      nextId = masterAccessionNo + '.' + prefix + nmbr
    }
    callback(null, nextId)
  }

}
