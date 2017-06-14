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
  console.log('on get user moods fired')
  event.preventDefault()
  api.getUserMoods()
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
  const titleId = $(this).attr('titleId')
  const data = getFormFields(event.target)
  ui.refreshTable()
  api.updateMood(titleId, data)
    .then(ui.updateMoodSuccess)
    .catch(ui.updateMoodFailure)
}

const addHandlers = () => {
  $('#createMood').on('submit', onCreateMood)
  $('#getUserMoods').on('click', onGetUserMoods)
  $('#content').on('click', onDeleteMood)
  $('#content').on('submit', onUpdateMood)
  $('#content').on('click', '.delete-mood-button', onDeleteMood)
  $('#content').on('submit', '.update-mood', onUpdateMood)
}

module.exports = {
  addHandlers
}
