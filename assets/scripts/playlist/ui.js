'use strict'
const store = require('../store.js')
const showPlaylistsTemplate = require('../templates/playlist-listing.handlebars')

// const api = require('./api.js')
// // const getFormFields = require(`../../../lib/get-form-fields`)

const createPlaylistSuccess = (data) => {
  console.log(data, 'this is data')

  $('input').val('')
  // $('#newPlaylistModal').modal('hide')
  // $('.center').empty()
}

const createPlaylistFailure = () => {
  $('input').val('')
  // $('#newPlaylistModal').modal('hide')
  $('.message').text('Try again')
}

const indexPlaylistSuccess = (data) => {
  store.playlists = data.playlists
  const showPlaylistsHtml = showPlaylistsTemplate({ playlists: store.playlists })
  $('#handlebars-content').empty()
  $('#handlebars-content').append(showPlaylistsHtml)

  // $('.message').text('')
}

const indexPlaylistFailure = () => {
  $('.message').text('')
}

const showPlaylistSuccess = (data) => {
  console.log(data, 'this is data')
  $('.message').text('')
  $('input').val('')
}

const showPlaylistFailure = () => {
  $('.message').text('')
}

const updatePlaylistSuccess = (response) => {
  $('input').val('')
}

const updatePlaylistFailure = (response) => {
  $('.message').text('')
  $('input').val('')
}

const deletePlaylistSuccess = (response) => {
  $('input').val('')
  $('.message').text('')
}

const deletePlaylistFailure = (response) => {
  $('.message').text('')
}

module.exports = {
  createPlaylistSuccess,
  createPlaylistFailure,
  indexPlaylistSuccess,
  indexPlaylistFailure,
  showPlaylistSuccess,
  showPlaylistFailure,
  updatePlaylistSuccess,
  updatePlaylistFailure,
  deletePlaylistSuccess,
  deletePlaylistFailure
}
