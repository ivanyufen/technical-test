import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  name: "Ivan",
  age: 28,
  hobby: "Watch Movie",
  dataTable: [
    {
      id: 1,
      name: "Ivan",
      age: 28,
    },
    {
      id: 2,
      name: "Yufen",
      age: 35,
    },
    {
      id: 3,
      name: "Stefanus",
      age: 22,
    },
  ],
  sortBy: "asc",
  filter: "",
};

export const GlobalContext = createContext();

const reducer = (state, payload) => {
  switch (payload.type) {
    case "SET_NAME":
      return {
        ...state,
        name: payload.name,
      };
      break;
    case "SET_AGE":
      return {
        ...state,
        age: payload.age,
      };
      break;
    case "SET_HOBBY":
      return {
        ...state,
        hobby: payload.hobby,
      };
      break;
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: payload.sortBy,
      };
      break;
    case "SET_FILTER":
      return {
        ...state,
        filter: payload.filter,
      };
      break;

    default:
      return state;
      break;
  }
};

export default function WrapperContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
