'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

const refreshTable = () => {
  const showMoodHtml = showCustomMoodHB({ moods: store.userMoods })
  $('#content').empty()
  $('#content').append(showCustomMoodHtml)
}

const createMoodSuccess = (data) => {
  store.userMoods = data.moods
  $('input').val('')
}

const createMoodError = (data) => {
  userMessage('Something went wrong, please try again.')
}

const updateMoodSuccess = (moodId) => {
  store.userMoods = moodId.moods
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
}

const updateMoodFailure = (data) => {
  userMessage('Something went wrong, please try again.')
  store.userMoods = data.moods
}


const getUserMoodsSuccess = (data) => {
  if (data.moods.length === 0) {
    userMessage('You have no custom moods.')
  }
}

const getUserMoodsFailure = (moodId) => {
  userMessage('Something went wrong, please try again.')
  store.userMoods = moodId.moods
}

const deleteMoodSuccess = () => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
}

const deleteMoodFailure = (data) => {
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
