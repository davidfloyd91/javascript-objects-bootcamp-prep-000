var playlist = {
  Nirvana: 'Lithium'
};
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {artistName: [songTitle]});
}
