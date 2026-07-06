import { useState, useEffect } from "react";

function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      });
  }, []);

  return (
    <>
      <h1>Albums</h1>

      {albums.map((album) => (
        <div key={album.id}>
          <p>Album ID: {album.id}</p>
          <p>Title: {album.title}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Album;