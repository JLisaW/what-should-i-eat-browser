'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

// const refreshTable = () => {
//   const showMoodHtml = showCustomMoodHB({ moods: store.response.mood })
//   $('#content').empty()
//   $('#content').append(showMoodHtml)
// }

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
  userMessage('Something went wrong, please try again.')
}

const updateMoodSuccess = (moodTitle) => {
  console.log('update mood success ', moodTitle)
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
// const showCustomMoodHtml = showCustomMoodHB({mood: response.mood})
    $('#content').show()
    // $('#content').html(showCustomMoodHtml)
}

const updateMoodFailure = (error) => {
  userMessage('Something went wrong, please try again.')
}

const getUserMoodsSuccess = (response) => {
  console.log('response is ', response)
  const showCustomMoodsHtml = showCustomMoodHB({moods: response.moods})
  $('#handlebar-target').html(showCustomMoodsHtml)
  // if (data.moods.length === 0) {
  //   userMessage('You have no custom moods.')
  // }
}

const getUserMoodsFailure = (moodId) => {
  console.log('get user moodId is ', moodId)
  userMessage('Something went wrong, please try again.')
}

const deleteMoodSuccess = (moodId) => {
  console.log('delete mood successful')
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
  // $('#handlebar-target').empty()
}

const deleteMoodFailure = (moodId) => {
  userMessage('Something went wrong, please try again.')
}

const userMessage = (txt) => {
  const message = $('#message')[0]
  $(message).text(txt)
  // setTimeout(function () { $('#message').text('') }, 3000)
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
