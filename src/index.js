'use strict'

const aoUpdater = require('./core/aoUpdater')
const aoBuilder = require('./core/aoBuilder')
const aoRetriever = require('./core/aoRetriever')
const taskOrderCreator = require('./core/taskOrderCreator')

exports = module.exports = {
  aoUpdater: aoUpdater,
  aoBuilder: aoBuilder,
  aoRetriever: aoRetriever,
  taskOrderCreator: taskOrderCreator
}
