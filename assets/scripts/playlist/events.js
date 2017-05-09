'use strict'

const playlistsApi = require('./api.js')
const playlistsUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// exported buildPlaylist to config.js
const buildPlaylist = function () {

}

const onCreatePlaylist = function () {
  event.preventDefault = function () {
    const data = getFormFields(event.target)

    if (data.playlist.id.length !== 0) {
      playlistsApi.createPlaylist(data)
        .then(playlistsUi.onUpdateSuccess)
        .catch(playlistsUi.onError)
    } else {
      console.log('Please provide a playlist id!')
    }
  }
}
const onGetPlaylists = function (event) {
  event.preventDefault()

  playlistsApi.indexPlaylist()
    .then(playlistsUi.onSuccess)
    .catch(playlistsUi.onError)
}

const onGetPlaylist = function (event) {
  event.preventDefault()
  const playlist = getFormFields(event.target).playlist

  if (playlist.id.length !== 0) {
    playlistsApi.showPlaylist(playlist.id)
      .then(playlistsUi.onSuccess)
      .catch(playlistsUi.onError)
  } else {
    console.log('Please provide a playlist id!')
  }
}

const onUpdatePlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  if (data.playlist.id.length !== 0) {
    playlistsApi.updatePlaylist(data)
      .then(playlistsUi.onUpdateSuccess)
      .catch(playlistsUi.onError)
  } else {
    console.log('Please provide a playlist id!')
  }
}

const onDeletePlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const playlist = data.playlist

  if (playlist.id.length !== 0) {
    playlistsApi.destroyPlaylist(playlist.id)
      .then(playlistsUi.onSuccess)
      .catch(playlistsUi.onError)
  } else {
    console.log('Please provide a playlist id!')
  }
}

const addHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('submit', onSignOut)
  // $('#button').on('submit', addPlaylist)
}

module.exports = {
  onCreatePlaylist,
  onGetPlaylists,
  onGetPlaylist,
  onUpdatePlaylist,
  onDeletePlaylist,
  buildPlaylist,
  addHandlers
}
