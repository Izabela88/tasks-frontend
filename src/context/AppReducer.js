export default (state, action) => {
  switch (action.type) {
    case "REFRESH_TILES":
      return {
        ...state,
        tiles: action.payload,
      };
    case "DELETE_TILE":
      return {
        ...state,
        tiles: state.tiles.filter((tile) => tile.id !== action.payload),
      };
    case "ADD_TILE":
      return {
        ...state,
        tiles: [action.payload, ...state.tiles],
      };

    case "UPDATE_TILE":
      const idx = state.tiles
        .map((tile) => tile.id)
        .indexOf(action.payload.legacyTile.id);
      state.tiles[idx] = action.payload.updatedTile;
      return {
        ...state,
      };
    default:
      return state;
  }
};
