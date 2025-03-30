import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Playlist from "./Components/Playlist";
import { useState } from "react";
import { hardcodedTracks, hardcodedPlaylist } from "./assets/data";

function App() {
  const [searchResult, setSearchResults] = useState(hardcodedTracks);
  const [playlist, setPlaylist] = useState(hardcodedPlaylist);
  return (
    <div>
      <SearchBar />
      <div>
        <SearchResults tracks={searchResult} />
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
}

export default App;
