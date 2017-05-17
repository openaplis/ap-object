'use strict'

var ObjectId = require('bson-objectid')
var moment = require('moment')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')

var self = module.exports = {

  getTypingShortcutTestData: function (callback) {
    var typingShortcutTestDataPath = path.join(__dirname, 'typing-shortcut-test-data.json')
    fs.readFile(typingShortcutTestDataPath, function (err, data) {
      if(err) return callback(err)
      var typingShortcuts = JSON.parse(data)
      callback(null, typingShortcuts)
    })
  }

}
