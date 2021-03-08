import * as actionTypes from "../types/actionTypes";

const initialState = {
  isAuthenticated: false,
  username: "",
  password: "",
};

// TODO: change the type of action (not to be of any type tho)
export const authReducer = (state = initialState, action: any) => {
  // if already available in db then return "already signed in"
  // else add a new entry in database
  
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.LOGOUT:
      return {
          ...state,
        isAuthenticated: false,
      };
    case actionTypes.REGISTER:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return initialState;
  }
};
