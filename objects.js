var playlist = {
  'Slowdive': "Alison",
  'My Bloody Valentine': "Tears Don't Fall",
  'Phil Ochs': "Lizstomania"
};

function updatePlaylist(playlist, artist, song) {
  Object.assign({}, playlist, {Gorillaz: "Dare"}, {Danzig: "Mother"})
}