import Tile from "./Tile";

function TileList({ tiles }) {
  return (
    <div
      style={{ margin: "auto", gap: "10px" }}
      className="container row row-cols-3 mt-5"
    >
      {tiles.map((tile) => (
        <Tile key={tile.id} tile={tile} status={tile.status} />
      ))}
    </div>
  );
}

export default TileList;
