import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  tiles: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const refreshTiles = (tiles) => {
    dispatch({
      type: "REFRESH_TILES",
      payload: tiles,
    });
  };

  const deleteTile = (id) => {
    dispatch({ type: "DELETE_TILE", payload: id });
  };

  const addTile = (tile) => {
    dispatch({ type: "ADD_TILE", payload: tile });
  };

  return (
    <GlobalContext.Provider
      value={{ tiles: state.tiles, refreshTiles, deleteTile, addTile }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
