'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateMood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createMood(data)
      .then(ui.createMoodSuccess)
      .catch(ui.createMoodError)
}

const onAddFood = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addFood(data)
      .then(ui.addFoodSuccess)
      .catch(ui.addFoodError)
}

// my moods
const onGetUserMoods = function (event) {
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
  const moodId = $(this).attr('moodId')
  api.updateMood(data, moodId)
    .then(ui.updateMoodSuccess)
    .catch(ui.updateMoodFailure)
}

const onViewFoodList = function (event) {
  console.log('on view food list function')
  event.preventDefault()
  // const foodId = $(this).attr('foodId')
  api.viewFoodList()
    .then(ui.viewFoodListSuccess)
    .catch(ui.viewFoodListFailure)
}

const addHandlers = () => {
  $('#createMood').on('submit', onCreateMood)
  $('#getUserMoods').on('click', onGetUserMoods)
  $('#handlebar-target').on('click', '.delete-mood-button', onDeleteMood)
  $('#handlebar-target').on('submit', '#update-mood-button', onUpdateMood)
  $('#handlebar-target').on('click', '.view-food-list-button', onViewFoodList)
}

module.exports = {
  addHandlers
}
