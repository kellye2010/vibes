'use strict'
const config = require('../config.js')
const store = require('../store.js')
// const app = require('../app.js')

const createPlaylist = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/playlists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexPlaylists = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/playlists',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const showPlaylists = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/playlists/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }

// const showPlaylist = function (id) {
//   return $.ajax({
//     url: config.apiOrigin + '/playlists/' + id,
//     method: 'GET',
//     Authorization: 'Token token=' + store.user.token
//   },
// )
// }

const updatePlaylist = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/playlists/' + data.playlist.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const destroyPlaylist = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/playlists/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createPlaylist,
  indexPlaylists,
  // showPlaylist,
  // showPlaylists,
  updatePlaylist,
  destroyPlaylist
}
