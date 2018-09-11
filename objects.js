var playlist = {
  The_Strokes: "Reptilia",
  Jet: "Are you gonna be my girl",
  Phoenix: "Lizstomania"
};

function updatePlaylist(playlist, artist, song) {
  Object.assign({}, playlist, {Gorillaz: "Dare"}, {Danzig: "Mother"})
}