'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')

const refreshTable = () => {
  const showMoodHtml = showCustomMoodHB({ moods: store.userTitle })
  $('#content').empty()
  $('#content').append(showMoodHtml)
}

const createMoodSuccess = (data) => {
  store.userMoods = data.title
  refreshTable()
  $('input').val('')
}

const createMoodError = (data) => {
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


const getUserMoodsSuccess = (data) => {
  if (data.moods.length === 0) {
    userMessage('You have no custom moods.')
  }   store.userMoods = data.moods
      refreshTable()
}

const showAuthUserSurveysSuccess = (data) => {
  $('#content').hide()
  $('form').hide()
  $('.alert').text('')
}


const getUserMoodsFailure = (userId) => {
  console.log('get user mood fail title id is ', userlId)
  userMessage('Something went wrong, please try again.')
  store.userMoods = titleId.moods
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
