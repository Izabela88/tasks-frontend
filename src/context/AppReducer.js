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
    default:
      return state;
  }
};
