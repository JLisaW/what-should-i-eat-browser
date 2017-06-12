'use strict'

const store = require('../store.js')
const api = require('./api.js')

const signUpSuccess = (data) => {
  $('#signUpModal').modal('toggle')
  userMessage('You are now signed up, please sign in.')
  $('#create').h
  ide()
}

const signUpFailure = (response) => {
  $('#signUpModal').modal('toggle')
  userMessage('Sign up unsuccessful, please try again.')
  $('#create').hide()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#signInModal').modal('toggle')
  userMessage('You are now signed in.')
  $('#hideSignOut').show()
  $('#hideChangePW').show()
  $('#create').show()
}

const signInFailure = (response) => {
  $('#signInModal').modal('toggle')
  userMessage('Sign in unsuccessful, please try again.')
}

const signOutSuccess = (data) => {
  store.user = null
  $('#content').empty()
  userMessage('You have signed out.')
  $('#createTask').hide()
}

const signOutFailure = (response) => {
  $('#signOutModal').modal('toggle')
  userMessage('You are still signed in, please try again.')
}

const changePasswordSuccess = (data) => {
  $('#changePWModal').modal('toggle')
  userMessage('Your password has been changed.')
}

const changePasswordFailure = (response) => {
  $('#changePWModal').modal('toggle')
  userMessage('Unsuccessful password change.  Did you sign in?')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
