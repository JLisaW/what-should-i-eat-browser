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

const updateMood = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/moods/' + data.mood.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteMood = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/moods/' + data.mood.id,
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

module.exports = {
  createMood,
  updateMood,
  deleteMood,
  getUserMoods
}
