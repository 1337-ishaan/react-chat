import * as actionTypes from "../types/actionTypes";
import { useFetch } from "../../modules/useFetch";
import {store} from '../store';

const usersState = {
  userData: null,
  selectedUser: null,
};

export const usersReducer = (state = store, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        userData: action.payload.userData,
      };
    case actionTypes.SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload.selectedUser,
        
      };
    default:
      return {
        ...state,
      };
  }
};
