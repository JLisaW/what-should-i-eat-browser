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
    data: data
  })
}

const updateMood = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/moods/' + moodId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
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

const getUserMoods = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/moods/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createMood,
  updateMood,
  deleteMood,
  getUserMood
}
