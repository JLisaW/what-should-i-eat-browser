'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

const createMoodSuccess = (response) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
  const showCustomMoodHtml = showCustomMoodHB({mood: response.mood})
  $('#content').html(showCustomMoodHtml)
  $('form#createMood').trigger('reset')
  $('#content').show()
}

const createMoodError = (error) => {
  userMessage('Unable to create mood.')
  $('#content').show()
  $('form#createMood').trigger('reset')
}

const updateMoodSuccess = (moodEmotion) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
    $('form#createMood').trigger('reset')
    $('form#update-mood-button').trigger('reset')
    $('#content').show()
}

const updateMoodFailure = (error) => {
  userMessage('Unable to edit mood.')
  $('form#createMood').trigger('reset')
  $('form#update-mood-button').trigger('reset')
  $('#content').show()
}


const getUserMoodsSuccess = (response) => {
  const showCustomMoodsHtml = showCustomMoodHB({moods: response.moods})
  $('#handlebar-target').html(showCustomMoodsHtml)
  if (response.moods.length === 0) {
    userMessage('You have no custom moods.')
    $('form#createMood').trigger('reset')
    $('#content').show()
  }
}

const getUserMoodsFailure = () => {
  userMessage('Unable to Retrieve Data.')
  $('form#createMood').trigger('reset')
  $('#content').show()
}

const deleteMoodSuccess = (moodId) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
    $('form#createMood').trigger('reset')
    $('#content').show()
}

const deleteMoodFailure = (moodId) => {
  userMessage('Something went wrong, please try again.')
  $('form#createMood').trigger('reset')
  $('#content').show()
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
