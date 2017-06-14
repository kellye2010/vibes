'use strict'
const store = require('../store.js')

const signUpSuccess = () => {
  $('input').val('')
  $('#signUpModal').modal('hide')
  $('.message').text('Signed up!')
}

const signUpFailure = () => {
  // $('.playlist-box').hide()
  $('input').val('')
  $('#signUpModal').modal('hide')
  $('.message').text('Sign up failed!')
}

const signInFailure = () => {
   $('input').val('')
   $('#signInModal').modal('hide')
   $('.message').text('Sign in failed!')
}

const signInSuccess = (data) => {
   $('input').val('')
   store.user = data.user
   $('#signInModal').modal('hide')
   $('.playlist-box').show()
   $('.sign-in-show').show()
   $('.sign-out-show').hide()
   $('.message').text('Create your playlist!')
}

const changePasswordSuccess = (data) => {
  $('input').val('')
  $('#changePasswordModal').modal('hide')
  $('.message').text('Password Successfully Changed!')
}

  // store the user object as per below
 //  store.user = data.user
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
  $('.playlist-box').hide()
  $('.sign-in-show').hide()
  $('.sign-out-show').show()
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
