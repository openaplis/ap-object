'use strict'

const assert = require('chai').assert
const typingShortcutHelper = require('../src/index').typingShortcutHelper

describe('Typing Shortcut Helper Tests', function() {

  it('Typing Shortcut Test Data', function(done) {
      typingShortcutHelper.getTypingShortcutTestData(function (err, typingShortcuts) {
        if(err) return console.log(err)
        assert.isAtLeast(typingShortcuts.length, 1)
        done()
      })
  })

})
