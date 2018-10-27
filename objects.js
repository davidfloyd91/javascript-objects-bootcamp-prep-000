var playlist = {
  Nirvana: 'Lithium'
};
function updatePlaylist(playlist, artist, song) {
  Object.assign({}, playlist, {artist: [song]});
}
