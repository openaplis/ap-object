const assert = require('assert')
const path = require('path')
const clone = require('clone')
const deepDiff = require('deep-diff')

const aoRetriever = require(path.resolve('./src/core/ao-retriever'))
const aoUpdater = require(path.resolve('./src/core/ao-updater'))

var masterAccessionNo = '17-16'

describe('aoUpdater', function() {
  describe('update', function() {
    it('Testing the updater.', function(done) {
      aoRetriever.retrieve(masterAccessionNo, function (err, ao) {
        assert.equal(ao.MasterAccessionNo, masterAccessionNo)
        var aoClone = clone(ao)
        assert.equal(aoClone.MasterAccessionNo, masterAccessionNo)
        ao.PLastName = 'Mouse'
        aoUpdater.update(ao, aoClone, function (err, result) {
          assert.equal('hello', result)
          done()
        })
      })
    })
  })
})
