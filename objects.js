var playlist = {artist: 'song'}

function updatePlaylist(playlist, song, artist) {
  return Object.assign({}, playlist, {[song]: artist})
}
