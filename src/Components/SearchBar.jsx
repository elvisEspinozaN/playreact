function SearchBar() {
  return (
    <form>
      <input
        type="text"
        placeholder="Search artist, tracks, or album..."
        autoFocus
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
