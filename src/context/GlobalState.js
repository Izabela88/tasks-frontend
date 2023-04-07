import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  tiles: [],
  taskTypes: [],
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

  const refreshTaskTypes = (taskTypes) => {
    dispatch({
      type: "REFRESH_TASK_TYPES",
      payload: taskTypes,
    });
  };

  const deleteTile = (id) => {
    dispatch({ type: "DELETE_TILE", payload: id });
  };

  const addTile = (tile) => {
    dispatch({ type: "ADD_TILE", payload: tile });
  };

  const updateTile = (updatedTile, legacyTile) => {
    dispatch({
      type: "UPDATE_TILE",
      payload: { updatedTile: updatedTile, legacyTile: legacyTile },
    });
  };

  const addTask = (task, tileId) => {
    dispatch({ type: "ADD_TASK", payload: { task: task, tileId: tileId } });
  };

  const deleteTask = (taskId, tileId) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { taskId: taskId, tileId: tileId },
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tiles: state.tiles,
        taskTypes: state.taskTypes,
        refreshTiles,
        deleteTile,
        addTile,
        updateTile,
        addTask,
        refreshTaskTypes,
        deleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
