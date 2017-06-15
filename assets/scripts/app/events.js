'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

// const onRevealAddMood = function (event) {
//   $('form#change-password').hide()
//   $('form#createMood').toggle()
//   $('#content').text('')
// }

const onCreateMood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createMood(data)
      .then(ui.createMoodSuccess)
      .catch(ui.createMoodError)
}

// my moods
const onGetUserMoods = function (event) {
  console.log('event: on get user moods fired')
  event.preventDefault()
  api.getUserMoods()
        .then(ui.getUserMoodsSuccess)
        .catch(ui.getUserMoodsFailure)
}

const onDeleteMood = function (event) {
  event.preventDefault()
  const moodId = $(this).attr('moodId')
  api.deleteMood(moodId)
    .then(ui.deleteMoodSuccess)
    .catch(ui.deleteMoodFailure)
}

// edit custom moods
const onUpdateMood = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // debugger
  const moodId = $(this).attr('moodId')
  // console.log('update mood function moodTitle is', moodTitle)
  api.updateMood(data, moodId)
    .then(ui.updateMoodSuccess)
    .catch(ui.updateMoodFailure)
}

const addHandlers = () => {
  $('#createMood').on('submit', onCreateMood)
  $('#getUserMoods').on('click', onGetUserMoods)
  $('#handlebar-target').on('click', '.delete-mood-button', onDeleteMood)
  $('#handlebar-target').on('submit', '#update-mood-button', onUpdateMood)
}

module.exports = {
  addHandlers
}
