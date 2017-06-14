'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onRevealAddMood = function (event) {
  $('form#change-password').hide()
  $('form#createMood').toggle()
  $('#content').text('')
}

const onCreateMood = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createMood(data)
      .then(ui.createMoodSuccess)
      .catch(ui.createMoodError)
}

// my moods
const onGetUserMoods = function (event) {
  event.preventDefault()
  api.getUserMoods(data)
        .then(ui.getUserMoodsSuccess)
        .catch(ui.getUserMoodsFailure)
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
  api.updateMood(moodId, data)
    .then(ui.updateMoodSuccess)
    .catch(ui.updateMoodFailure)
}

const addHandlers = () => {
  $('#createMood').on('submit', onCreateMood)
  $('#getUserMoods').on('click', onGetUserMoods)
  $('#content').on('click', onDeleteMood)
  $('#content').on('submit', onUpdateMood)
  // $('#createMood').addClass('hide-element')
  $('#content').on('click', '.delete-mood-button', onDeleteMood)
  $('#content').on('submit', '.update-mood', onUpdateMood)
}

module.exports = {
  addHandlers
}
