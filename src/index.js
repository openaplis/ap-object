'use strict'

const aoUpdater = require('./core/ao-updater')
const aoBuilder = require('./core/ao-builder')
const aoRetriever = require('./core/ao-retriever')
const taskOrderCreator = require('./core/task-order-creator')

exports = module.exports = {
  aoUpdater: aoUpdater,
  aoBuilder: aoBuilder,
  aoRetriever: aoRetriever,
  taskOrderCreator: taskOrderCreator
}
