import * as actionTypes from "../types/actionTypes";
import { store } from "../store";

const initialState = {
  isAuthenticated: false,
  username: "",
  password: "",
};

// TODO: change the type of action (not to be of any type tho)

export const authReducer = (state = store, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        username: "",
        isAuthenticated: false,
      };
    case actionTypes.REGISTER:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
