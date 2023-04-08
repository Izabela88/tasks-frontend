import Tile from "./Tile";
import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function TileList() {
  const { refreshTiles, tiles, addTile } = useContext(GlobalContext);
  const [tilesFilter, setTilesFilter] = useState("");

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

  const filterTiles = () => {
    tiles.sort(function (a, b) {
      return new Date(b.launch_date) - new Date(a.launch_date);
    });
    if (tilesFilter) {
      return tiles.filter((tile) => tile.status === tilesFilter);
    }
    return tiles;
  };

  const filteredTiles = filterTiles();

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

      <div className="row m-4">
        <Form.Group as={Row} md="4" className="col-3">
          <Form.Label style={{ width: "100px" }}>Filter Tiles</Form.Label>
          <Form.Select
            name="filterTiles"
            onChange={(e) => setTilesFilter(e.currentTarget.value)}
            value={tilesFilter}
          >
            <option key="ALL" value="">
              ALL
            </option>
            <option key="PENDING" value="PENDING">
              PENDING
            </option>
            <option key="LIVE" value="LIVE">
              LIVE
            </option>
            <option key="ARCHIVED" value="ARCHIVED">
              ARCHIVED
            </option>
          </Form.Select>
        </Form.Group>
      </div>
      {filteredTiles.length < 1 ? (
        <div
          style={{ width: "100%", height: "50vh" }}
          className="container d-flex justify-content-center align-items-center"
        >
          <p className="fs-3">NO TILES TO SHOW</p>
        </div>
      ) : (
        <div
          style={{ margin: "auto", gap: "10px", width: "100%" }}
          className="container row row-cols-3 mt-5"
        >
          {filteredTiles.map((tile) => (
            <Tile key={tile.id} tile={tile} status={tile.status} />
          ))}
        </div>
      )}
    </>
  );
}

export default TileList;
