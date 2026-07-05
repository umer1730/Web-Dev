import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Searching: {search}</h2>
      
    </>
  );
}

export default Search;