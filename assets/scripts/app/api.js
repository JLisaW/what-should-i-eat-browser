'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createMood = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/moods',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateMood = function (data, moodId) {
  return $.ajax({
    url: config.apiOrigin + '/moods/' + moodId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteMood = (moodId) => {
  return $.ajax({
    url: config.apiOrigin + '/moods/' + moodId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUserMoods = () => {
  return $.ajax({
    url: config.apiOrigin + '/moods/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const viewFoodList = () => {
  console.log('view food list api')
  return $.ajax({
    url: config.apiOrigin + '/foods/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addFood = function (data) {
  console.log('add food function')
  return $.ajax({
    url: config.apiOrigin + '/foods',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createMood,
  updateMood,
  deleteMood,
  getUserMoods,
  viewFoodList,
  addFood
}
