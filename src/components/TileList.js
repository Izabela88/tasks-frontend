import Tile from "./Tile";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "react-bootstrap/Button";

function TileList() {
  const { refreshTiles, tiles } = useContext(GlobalContext);
  const { addTile } = useContext(GlobalContext);

  const fetchTiles = () => {
    fetch("http://localhost:8000/api/tiles/")
      .then((response) =>
        response
          .json()
          .then((data) =>
            response.ok ? refreshTiles(data) : Promise.reject(data)
          )
      )
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetchTiles();
  }, []);

  const createNewTile = () => {
    const tileStatus = "PENDING";
    fetch("http://localhost:8000/api/tiles/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: tileStatus }),
    })
      .then((response) =>
        response
          .json()
          .then((data) => (response.ok ? addTile(data) : Promise.reject(data)))
      )
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div className="row">
        <Button
          onClick={() => createNewTile()}
          className="btn-outline-dark btn-warning"
        >
          ADD NEW TILE
        </Button>
        <Button
          onClick={() => fetchTiles()}
          className="btn-outline-dark btn-primary"
        >
          REFRESH TILES
        </Button>
      </div>
      <div
        style={{ margin: "auto", gap: "10px", width: "100%" }}
        className="container row row-cols-3 mt-5"
      >
        {tiles.map((tile) => (
          <Tile key={tile.id} tile={tile} status={tile.status} />
        ))}
      </div>
    </>
  );
}

export default TileList;
