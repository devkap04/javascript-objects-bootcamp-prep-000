var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistNanme, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
