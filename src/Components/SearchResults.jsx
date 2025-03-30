import Tracklist from "./Tracklist";

function SearchResults({ tracks }) {
  return (
    <div>
      <h2>Search Results</h2>
      <div>
        <Tracklist tracks={tracks} />
      </div>
    </div>
  );
}

export default SearchResults;
