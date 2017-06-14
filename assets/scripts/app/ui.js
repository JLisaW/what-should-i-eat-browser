'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

const refreshTable = () => {
  const showMoodHtml = showCustomMoodHB({ moods: moods.reponse })
  $('#content').empty()
  $('#content').append(showMoodHtml)
}

const createMoodSuccess = (response) => {
  console.log('create mood success data.title is ', data.moods.title)
  refreshTable()
  $('input').val('')
}

const createMoodError = (data) => {
  console.log('create failed this is data.title ', data.mood.title)
  // debugger
  console.log('title is ', title)
  userMessage('Something went wrong, please try again.')
}

const updateMoodSuccess = (titleId) => {
  store.userMoods = titleId.moods
  api.getUserMoods()
    .then(getUserMoodsSuccess)
    .catch(getUserMoodsFailure)
}

const updateMoodFailure = (data) => {
  userMessage('Something went wrong, please try again.')
  store.userMoods = data.moods
}


const getUserMoodsSuccess = (response) => {
  console.log('response is ', response)
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
