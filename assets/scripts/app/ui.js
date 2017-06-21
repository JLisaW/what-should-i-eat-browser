'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showCustomMoodHB = require('../customMood.handlebars')
const showCustomFoodHB = require('../customFood.handlebars')

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

const updateMoodSuccess = (moodTitle) => {
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

const viewFoodListSuccess = (response) => {
  const showCustomFoodsHtml = showCustomFoodHB({foods: response.foods})
  console.log('view food list success response.foods is ', response.foods)
  $('#handlebar-target').html(showCustomFoodsHtml)
    $('form#createMood').trigger('reset')
    $('#content').show()
}

const viewFoodListFailure = () => {
  console.log('view food list failure response.foods is ', response.foods)
  userMessage('Something went wrong, please try again.')
  $('form#createMood').trigger('reset')
  $('#content').show()
}

const addFoodSuccess = (response) => {
  api.viewFoodList()
    .then(viewFoodListsSuccess)
    .catch(viewFoodListFailure)
  const showCustomFoodHtml = showCustomFoodHB({food: response.food})
  $('#content').html(showCustomFoodHtml)
  $('#handlebar-target').html(showCustomFoodsHtml)
  // $('form#createMood').trigger('reset')
  $('#content').show()
}

const addFoodError = (error) => {
  userMessage('Unable to add food.')
  $('#content').show()
  // $('form#createMood').trigger('reset')
}

const userMessage = (txt) => {
  const message = $('#message')[0]
  $(message).text(txt)
  setTimeout(function () { $('#message').text('') }, 2000)
}

module.exports = {
  getUserMoodsFailure,
  getUserMoodsSuccess,
  updateMoodFailure,
  updateMoodSuccess,
  createMoodError,
  createMoodSuccess,
  deleteMoodSuccess,
  deleteMoodFailure,
  addFoodSuccess,
  addFoodError,
  viewFoodListSuccess,
  viewFoodListFailure
}
