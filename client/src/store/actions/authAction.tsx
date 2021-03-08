import * as actionTypes from "../types/actionTypes";

export const loginUser = () => (dispatch: any) => {
  console.log("check login");
  dispatch({ type: actionTypes.LOGIN });
};
