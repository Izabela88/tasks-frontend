export default (state, action) => {
  switch (action.type) {
    case "REFRESH_TILES":
      return {
        ...state,
        tiles: action.payload,
      };
    default:
      return state;
  }
};
