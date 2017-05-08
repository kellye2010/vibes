'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#signUpModal').modal('hide')
  // $('input').val('')
}

const signUpFailure = () => {
  // $('.').text('Sign up failed!')
  $('#signUpModal').modal('hide')
  // $('input').val('')
}

// add shows where applicable
const signInSuccess = (data) => {
  // $('.').text('Create your playlist!')
  $('.container').show()
  $('#signInModal').modal('hide')
  // $('input').val('')
}

const signInFailure = () => {
  // $('.').text('Sign in failed!')
  $('#signInModal').modal('hide')
  // $('input').val('')
}

const changePasswordSuccess = (data) => {
  // $('.').text('Password Successfully Changed!')
  $('#changePasswordModal').modal('hide')
  // $('input').val('')
}

//   // store the user object as per below
//   store.user = data.user
// }

const changePasswordFailure = () => {
  // $('.').text('Error Changing Password!')
  $('#changePasswordModal').modal('hide')
  // $('input').val('')
}

const signOutSuccess = (data) => {
  $('.').text("What's Your Vibe?")
  $('.container').hide()
  $('.defText').show()
  $('.hideOnStart').hide()
  $('.hideOnStartTwo').hide()
  $('.hideOnSignIn').show()
  $('.hideOnSignInTwo').show()
  $('.UAtext').show()
  $('#signOutModal').modal('hide')
  // store the user with a value of null as per below
  store.user = null
}

const signOutFailure = () => {
  $('.UAtext').text('Sign out faulire!')
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
