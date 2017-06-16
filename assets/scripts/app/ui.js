'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

const createMoodSuccess = (response) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
  const showCustomMoodHtml = showCustomMoodHB({mood: response.mood})
  $('#content').show()
  $('#content').html(showCustomMoodHtml)
  $('form#createMood').trigger('reset')
}

const createMoodError = (error) => {
  userMessage('Unable to create moood.')
  $('form#createMood').trigger('reset')
}

const updateMoodSuccess = (moodTitle) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
    $('form#createMood').trigger('reset')
    $('form#update-mood-button').trigger('reset')
}

const updateMoodFailure = (error) => {
  userMessage('Unable to edit mood.')
  $('form#createMood').trigger('reset')
  $('form#update-mood-button').trigger('reset')
}

const getUserMoodsSuccess = (response) => {
  const showCustomMoodsHtml = showCustomMoodHB({moods: response.moods})
  $('#handlebar-target').html(showCustomMoodsHtml)
  if (response.moods.length === 0) {
    userMessage('You have no custom moods.')
    $('form#createMood').trigger('reset')
  }
}

const getUserMoodsFailure = () => {
  userMessage('Unable to Retrieve Data.')
  $('form#createMood').trigger('reset')
}

const deleteMoodSuccess = (moodId) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
    $('form#createMood').trigger('reset')
}

const deleteMoodFailure = (moodId) => {
  userMessage('Something went wrong, please try again.')
  $('form#createMood').trigger('reset')
}

const userMessage = (txt) => {
  const message = $('#message')[0]
  $(message).text(txt)
  setTimeout(function () { $('#message').text('') }, 3000)
}

module.exports = {
  getUserMoodsFailure,
  getUserMoodsSuccess,
  updateMoodFailure,
  updateMoodSuccess,
  createMoodError,
  createMoodSuccess,
  deleteMoodSuccess,
  deleteMoodFailure
}
