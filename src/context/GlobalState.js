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

  return (
    <GlobalContext.Provider value={{ tiles: state.tiles, refreshTiles }}>
      {children}
    </GlobalContext.Provider>
  );
};
