import React from "react";
import { LOGOUT } from "../../store/types/actionTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../index";
import socket from "../../socket";

const SelectedContactInfo = () => {
  // const username={}

  const logoutUser = () => {
    dispatch({ type: LOGOUT });
    socket.disconnect();
  };

  const { username } = useSelector((state: RootState) => state.authReducer);
  const dispatch = useDispatch();
  console.log(username, "username in selectedContact");
  return (
    <div className="flex flex-col text-center">
      <div className="m-auto">
        <img
          src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          className="rounded-full h-24 w-24  content-center text-center"
          alt="username"
        />
      </div>
      <div>{username}</div>
      <button onClick={logoutUser}>LOGOUT</button>
    </div>
  );
};

export default SelectedContactInfo;
