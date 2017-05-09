'use strict'

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.playlist) {
    console.log(data.playlist)
  } else {
    console.table(data.playlists)
  }
}

const onUpdateSuccess = function () {
  console.log('You successfully updated your playlist!')
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onUpdateSuccess,
  onError
}
