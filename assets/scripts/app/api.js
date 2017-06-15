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
  console.log('update moodTitle is ', data)
  console.log('update moodId is ', moodId)
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
  console.log('delete mood moodId is ', moodId)
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

module.exports = {
  createMood,
  updateMood,
  deleteMood,
  getUserMoods
}
