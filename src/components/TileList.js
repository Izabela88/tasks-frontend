import Tile from "./Tile";
import { useEffect, useState } from "react";

function TileList() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/tiles/")
      .then((response) => response.json())
      .then((tilesDada) => setTiles(tilesDada))
      .catch((err) => {
        console.error(err.message);
      });
  });

  return (
    <div
      style={{ margin: "auto", gap: "10px", width: "100%" }}
      className="container row row-cols-3 mt-5"
    >
      {tiles.map((tile) => (
        <Tile key={tile.id} tile={tile} status={tile.status} />
      ))}
    </div>
  );
}

export default TileList;
