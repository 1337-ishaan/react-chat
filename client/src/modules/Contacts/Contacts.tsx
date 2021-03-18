import React, { useState } from "react";
import SearchBox from "../utils/SearchBox";
// const io = require("socket.io-client");
// import { io } from "socket.io-client";
import { RootState } from "../../index";
import socket from "../../socket";
import { useSelector, useDispatch } from "react-redux";
import { SELECT_USER } from "../../store/types/actionTypes";

const Contacts = ({ filteredUsers }: any) => {
  const [isUsernameSelected, setIsUsernameSelected] = useState(false);
  const { userData, selectedUser } = useSelector(
    (state: RootState) => state.usersReducer
  );

  // const {selectedUser} = useSelector((state : RootState) => state.selectedUserReducer)

  const dispatch = useDispatch();

  console.log(selectedUser, "selectedUser");
  console.log(userData, "contacts userdata");

  const onUsernameSelection = (username: string) => {
    setIsUsernameSelected(true);
    socket.auth = { username };
    console.log(socket.auth);
    socket.connect();
  };

  socket.on("user connected", (user: any) => {
    // initReactiveProperties(user);
    // users.push(user);
  });

  socket.on("connect_error", (err: any) => {
    if (err.message === "invalid username") {
      setIsUsernameSelected(false);
    }
  });

  interface IUser {
    username: string;
    password: string;
  }

  return (
    <>
      {filteredUsers &&
        filteredUsers.map((friends: IUser, i: number) => (
          <div
            key={i}
            onClick={() =>
              dispatch({
                type: SELECT_USER,
                payload: { selectedUser: friends },
              })
            }
            className="flex hover:shadow-inner rounded-full shadow m-3 justify-start p-3 pr-3"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
              alt="user"
              className="h-14 "
            />
            <div key={i} className="text-left	pl-3">
              <div className="text-2xl">{friends.username}</div>
              <div className="base">{friends.password}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Contacts;
