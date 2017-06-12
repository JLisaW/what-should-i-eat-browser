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
  $('#content').on('click', '.delete-mood-button', onDeleteMood)
  $('#content').on('submit', '.update-mood-by-id-form', onUpdateMood)
  $('#hideSignOut').hide()
  $('#hideChangePW').hide()
  $('#createTask').addClass('hide-element')
}

module.exports = {
  addHandlers
}
