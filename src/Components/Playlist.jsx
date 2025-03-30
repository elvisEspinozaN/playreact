import Tracklist from "./Tracklist";

function Playlist({ playlist }) {
  return (
    <div>
      <h2>Playlist</h2>
      <div>
        <input defaultValue="New Playlist" />
        <Tracklist tracks={playlist} />
        <button>Save</button>
      </div>
    </div>
  );
}

export default Playlist;
