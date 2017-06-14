'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreatePlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('this is data ', data)
  // if (data.playlist.title.length !== 0) {
  api.createPlaylist(data)
      .then(ui.createPlaylistSuccess)
      .catch(ui.createPlaylistFailure)
  // } else {
  //   console.log('Please provide a playlist name!')
  // }
}

const onGetPlaylists = function (event) {
  event.preventDefault()

  api.indexPlaylists()
    .then(ui.indexPlaylistSuccess)
    .catch(ui.indexPlaylistFailure)
}

const onGetPlaylist = function (event) {
  event.preventDefault()
  const playlist = getFormFields(event.target).playlist

  if (playlist.id.length !== 0) {
    api.showPlaylist(playlist.id)
      .then(ui.showPlaylistSuccess)
      .catch(ui.showPlaylistFailure)
  } else {
    console.log('Please provide a playlist id!')
  }
}

const onUpdatePlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  if (data.playlist.id.length !== 0) {
    api.updatePlaylist(data)
      .then(ui.updatePlaylistSuccess)
      .catch(ui.updatePlaylistFailure)
  } else {
    console.log('Please provide a playlist id!')
  }
}

const onDeletePlaylist = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const playlist = data.playlist

  if (playlist.id.length !== 0) {
    api.destroyPlaylist(playlist.id)
      .then(ui.deletePlaylistSuccess)
      .catch(ui.deletePlaylistFailure)
  } else {
    console.log('Please provide a playlist id!')
  }
}

// const addPlaylist = function (event) {
//   const data = getFormFields(this)
//   event.preventDefault()
//   api.addPlaylist(data)
//     .then(ui.addPlaylistSuccess)
//     .catch(ui.addPlaylistFailure)
// }

const addHandlers = () => {
  $('#new-playlist').on('submit', onCreatePlaylist)
  $('#playlists-search').on('submit', onGetPlaylists)
  $('#playlist-search').on('submit', onGetPlaylist)
  $('#playlist-update').on('submit', onUpdatePlaylist)
  $('#playlist-delete').on('submit', onDeletePlaylist)
}

module.exports = {
  onCreatePlaylist,
  onGetPlaylists,
  onGetPlaylist,
  onUpdatePlaylist,
  onDeletePlaylist,
  addHandlers
}
