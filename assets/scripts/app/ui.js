'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

const createMoodSuccess = (response) => {
  console.log('create mood success response is ', response)
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
  const showCustomMoodHtml = showCustomMoodHB({mood: response.mood})
  $('#content').show()
  $('#content').html(showCustomMoodHtml)
}

const createMoodError = (error) => {
  userMessage('Unable to create moood.')
}

const updateMoodSuccess = (moodTitle) => {
  console.log('update mood success ', moodTitle)
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
    $('#content').show()
}

const updateMoodFailure = (error) => {
  userMessage('Unable to edit mood.')
}

const getUserMoodsSuccess = (response) => {
  console.log('response is ', response)
  const showCustomMoodsHtml = showCustomMoodHB({moods: response.moods})
  $('#handlebar-target').html(showCustomMoodsHtml)
  if (response.moods.length === 0) {
    userMessage('You have no custom moods.')
  }
}

const getUserMoodsFailure = () => {
  userMessage('Unable to Retrieve Data.')
}

const deleteMoodSuccess = (moodId) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
}

const deleteMoodFailure = (moodId) => {
  userMessage('Something went wrong, please try again.')
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
