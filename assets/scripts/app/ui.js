'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

// const refreshTable = () => {
//   const showMoodHtml = showCustomMoodHB({ moods: mood.response })
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
  // refreshtable()
}

const createMoodError = (error) => {
  userMessage('Something went wrong, please try again.')
}

const updateMoodSuccess = (moodId) => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
}

const updateMoodFailure = (error) => {
  userMessage('Something went wrong, please try again.')
}


const getUserMoodsSuccess = (response) => {
  console.log('response is ', response)
  const showCustomMoodHtml = showCustomMoodHB({moods: response.moods})
  console.log('response.mood is ', response.mood)
  $('#handlebar-target').show()
  $('#handlebar-target').append(showCustomMoodHtml)
  // if (data.moods.length === 0) {
  //   userMessage('You have no custom moods.')
  // }
    // refreshTable()
}


const getUserMoodsFailure = (response) => {
  console.log('get user mood response is ', response)
  userMessage('Something went wrong, please try again.')
}

const deleteMoodSuccess = () => {
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
}

const deleteMoodFailure = (data) => {
  userMessage('Something went wrong, please try again.')
}

// const userMessage = (txt) => {
//   const message = $('#message')[0]
//   $(message).text(txt)
//   setTimeout(function () { $('#message').text('') }, 3000)
// }

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
