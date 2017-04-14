var ObjectId = require('bson-objectid')
var moment = require('moment')

module.exports.create = (pso, callback) => {
  var objectId = ObjectId().toString()

  var taskOrder = {
    ObjectId: objectId,
    TaskOrderId: objectId,
    MasterAccessionNo: pso.MasterAccessionNo,
    ReportNo: pso.ReportNo,
    PanelSetName: pso.PanelSetName,
    TaskName: 'Breast Fixation Check',
    OrderDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    OrderedById: 5134,
    OrderedByInitials: 'OP'
  }
  
  callback(null, taskOrder)
}

/*
string objectId = MongoDB.Bson.ObjectId.GenerateNewId().ToString();

this.m_TaskOrderId = taskOrderId;
this.m_ObjectId = objectId;
this.m_TaskName = "Surgical Specimen Disposal";
this.m_OrderedById = systemIdentity.User.UserId;
this.m_OrderedByInitials = systemIdentity.User.Initials;
this.m_OrderDate = DateTime.Now;
this.m_TaskDate = actionDate;
this.m_AcknowledgementType = TaskAcknowledgementType.Daily;
this.m_TaskId = taskSurgicalSpecimenDisposal.TaskId;

this.m_TaskId = "BLCKSNDOUTNEO";
this.m_TaskName = "Send block to Neogenomics";
this.m_Description = "Send block to Neogenomics for testing";
this.m_AssignedTo = TaskAssignment.Molecular;
*/
