'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateMood = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createMood(data)
      .then(ui.createMoodSuccess)
      .catch(ui.createMoodError)
}

// my moods
const onGetUserMood = function (event) {
  event.preventDefault()
  api.getUserMoods()
        .then(ui.getUserTasksSuccess)
        .catch(ui.getUserTasksFailure)
}

const onDeleteMood = function (event) {
  event.preventDefault()
  const moodId = $(event.target).attr('moodId')
  ui.refreshTable()
  api.deleteTask(moodId)
    .then(ui.deleteMoodSuccess)
    .catch(ui.deleteMoodFailure)
}

// edit custom moods
const onUpdateMood = function (event) {
  event.preventDefault()
  const moodId = $(this).attr('moodId')
  const data = getFormFields(event.target)
  ui.refreshTable()
  api.updateTask(moodId, data)
    .then(ui.updateMoodSuccess)
    .catch(ui.updateMoodFailure)
}

const addHandlers = () => {
  $('#createMood').on('submit', onCreateMood)
  $('#getUserMoods').on('click', onGetUserMoods)
  $('#content').on('click', onDeleteMood)
  $('#content').on('submit', onUpdateMood)
  $('#createMood').addClass('hide-element')
}

module.exports = {
  addHandlers
}
