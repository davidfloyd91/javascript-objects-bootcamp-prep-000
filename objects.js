var playlist = {
  Nirvana: 'Lithium'
};
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle});
}
