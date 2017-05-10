'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  // $('#signUpModal').modal('hide')
  $('.playlist-box').hide()
  $('input').val('')
  $('.message').text('Signed up!')
}

const signUpFailure = () => {
  $('.message').text('Sign up failed!')
  $('.playlist-box').hide()
  $('#signUpModal').modal('hide')
  $('input').val('')
  $('.message').text('Error!')
}

// add shows where applicable
const signInSuccess = (data) => {
  $('.message').text('Create your playlist!')
  $('.playlist-box').show()
  $('#signInModal').modal('hide')
  $('input').val('')
  store.user = data.user
}

const signInFailure = () => {
  $('.message').text('Sign in failed!')
  $('#signInModal').modal('hide')
  $('input').val('')
}

const changePasswordSuccess = (data) => {
  $('.message').text('Password Successfully Changed!')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

//   // store the user object as per below
//   store.user = data.user
// }

const changePasswordFailure = () => {
  $('.message').text('Error Changing Password!')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
}

const signOutSuccess = (data) => {
  $('.message').text("What's Your Vibe?")
  $('#signOutModal').modal('hide')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.message').text('Sign out failure!')
  $('#signOutModal').modal('hide')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess
}
