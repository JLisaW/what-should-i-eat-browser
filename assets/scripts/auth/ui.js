'use strict'

const store = require('../store.js')
const api = require('./api.js')

const resetFormFields = () => {
  $('form#sign-up').trigger('reset')
  $('form#sign-in').trigger('reset')
  $('form#sign-out').trigger('reset')
  $('form#change-password').trigger('reset')
}

const signUpSuccess = (data) => {
  $('#signUpModal').modal('toggle')
  userMessage('You are now signed up, please sign in.')
  $('#getUserMoods').hide()
  $('#sign-out').hide()
  $('#changePW').hide()
  resetFormFields()
}

const signUpFailure = (response) => {
  $('#signUpModal').modal('toggle')
  userMessage('Sign up unsuccessful, please try again.')
  $('#getUserMoods').hide()
  $('#sign-out').hide()
  $('#changePW').hide()
  resetFormFields()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#signInModal').modal('toggle')
  userMessage('You are now signed in.')
  $('#sign-out').show()
  $('#changePW').show()
  $('#content').show()
  $('#getUserMoods').show()

}

const signInFailure = (response) => {
  $('#signInModal').modal('toggle')
  userMessage('Sign in unsuccessful, please try again.')
  $('#getUserMoods').hide()
  $('#sign-out').hide()
  $('#changePW').hide()
  resetFormFields()
}

const signOutSuccess = (data) => {
  $('#getUserMoods').hide()
  $('#content').hide()
  $('#sign-out').hide()
  $('#changePW').hide()
  $('#handlebar-target').hide()
  userMessage('You have signed out.')
  resetFormFields()
}

const signOutFailure = (response) => {
  $('#signOutModal').modal('toggle')
  userMessage('You are still signed in, please try again.')
  resetFormFields()
}

const changePasswordSuccess = (data) => {
  $('#changePWModal').modal('toggle')
  userMessage('Your password has been changed.')
  resetFormFields()
}

const changePasswordFailure = (response) => {
  $('#changePWModal').modal('toggle')
  userMessage('Unsuccessful password change.  Did you sign in?')
  resetFormFields()
}

const userMessage = (txt) => {
  const message = $('#message')[0]
  $(message).text(txt)
  setTimeout(function () { $('#message').text('') }, 4000)
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
