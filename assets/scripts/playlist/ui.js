'use strict'
const store = require('../store.js')
const showPlaylistsTemplate = require('../templates/playlist-listing.handlebars')
// const api = require('./api.js')
// const getFormFields = require(`../../../lib/get-form-fields`)

const createPlaylistSuccess = (data) => {
  console.log(data, 'this is data')

  $('input').val('')
  // $('#newPlaylistModal').modal('hide')
  // $('.center').empty()
}

const createPlaylistFailure = () => {
  $('input').val('')
  // $('#newPlaylistModal').modal('hide')
  $('.message').text('Error creating playlist!')
}

const indexPlaylistSuccess = (data) => {
  store.playlists = data.playlists
  const showPlaylistsHtml = showPlaylistsTemplate({
    playlists: store.playlists
  })
  $('#handlebars-content').empty()
  $('#handlebars-content').append(showPlaylistsHtml)
  $('.message').text('Look at your Vibes!')
  // $('.message').text('')
}

const indexPlaylistFailure = () => {
  $('.message').text('Error showing playlists!')
}

const showPlaylistSuccess = (data) => {
  console.log(data, 'this is data')
  $('.message').text('Look at your Vibe!')
  $('input').val('')
}

const showPlaylistFailure = () => {
  $('.message').text('Errors!')
}

const updatePlaylistSuccess = (response) => {
  $('input').val('')
  $('.message').text('Updated!')
}

const updatePlaylistFailure = (response) => {
  $('.message').text('Error updating playlist!')
  $('input').val('')
}

const deletePlaylistSuccess = (response) => {
  $('input').val('')
  $('.message').text('Deleted!')
}

const deletePlaylistFailure = (response) => {
  $('.message').text('Error deleting playlist!')
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
