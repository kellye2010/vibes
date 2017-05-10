'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  // $('#signUpModal').modal('hide')
  // $('.playlist-box').hide()
  $('input').val('')
  $('.message').text('Signed up!')
}

const signUpFailure = () => {
  // $('.message').text('Sign up failed!')
  // $('.playlist-box').hide()
  $('#signUpModal').modal('hide')
  $('input').val('')
  $('.message').text('Error!')
}

// add shows where applicable
const signInSuccess = (data) => {
  // $('.message').text('Create your playlist!')
  // $('.playlist-box').show()
  $('#signInModal').modal('hide')
  $('input').val('')
  store.user = data.user
  $('.message').text('Create your playlist!')
}

const signInFailure = () => {
  // $('.message').text('Sign in failed!')
  $('#signInModal').modal('hide')
  $('input').val('')
  $('.message').text('Sign in failed!')
}

const changePasswordSuccess = (data) => {
  // $('.message').text('Password Successfully Changed!')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
  $('.message').text('Password Successfully Changed!')
}

//   // store the user object as per below
//   store.user = data.user
// }

const changePasswordFailure = () => {
  // $('.message').text('Error Changing Password!')
  $('#changePasswordModal').modal('hide')
  $('input').val('')
  $('.message').text('Error Changing Password!')
}

const signOutSuccess = (data) => {
  // $('.message').text("What's Your Vibe?")
  $('#signOutModal').modal('hide')
  // store the user with a value of null as per below
  store.user = null
  $('.message').text("What's Your Vibe?")
}

const signOutFailure = () => {
  // $('.message').text('Sign out failure!')
  $('#signOutModal').modal('hide')
  $('.message').text('Sign out failure!')
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
