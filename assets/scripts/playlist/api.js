'use strict'

const config = require('../config.js')
const store = require('../store.js')
const app = require('../app.js')

const createPlaylist = function (data) {
  return $.ajax({
    url: app.host + '/playlists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexPlaylist = function () {
  return $.ajax({
    url: app.host + '/playlists',
    method: 'GET'
  })
}

const showPlaylists = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/playlists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showPlaylist = function (id) {
  return $.ajax({
    url: app.host + '/playlists/' + id,
    method: 'GET',
    Authorization: 'Token token=' + store.user.token
  },
  )
}

const updatePlaylist = function (data) {
  return $.ajax({
    url: app.host + '/playlists/' + data.playlist.id,
    method: 'PATCH',
    data
  })
}

const destroyPlaylist = function (id) {
  return $.ajax({
    url: app.host + '/playlists/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  createPlaylist,
  indexPlaylist,
  showPlaylist,
  showPlaylists,
  updatePlaylist,
  destroyPlaylist
}
