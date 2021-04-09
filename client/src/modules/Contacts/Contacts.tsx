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

  // const { user } = useSelector((state: RootState) => state.authReducer);
  // const {selectedUser} = useSelector((state : RootState) => state.selectedUserReducer)

  const dispatch = useDispatch();

  console.log(selectedUser, "selectedUser");
  console.log(userData, "contacts userdata");

  const onUsernameSelection = (user: any) => {
    setIsUsernameSelected(true);
    dispatch({
      type: SELECT_USER,
      payload: { selectedUser: user },
    });


    socket.receiverId = selectedUser?._id;
    // get both the ids and pass it to backend
    
    // start socket and exchange messages and also store in db


    // socket.selectedUserId = selectedUser?._id;
    console.log(socket.auth);
    socket.connect();
  };
// console.log(selectedUser)
  socket.on("users", (users: any) => {
    console.log(users, "users ");
    userData.forEach((user: any) => {
      socket.userId = user._id;
      // TODO: toastify the username when active
      console.log(user);
    });
    console.log(socket);
    // put the current user first, and then sort by username
    users = users.sort((a: any, b: any) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
  });

  socket.on("user connected", (user: any) => {
    // initReactiveProperties(user);
    // users.push(user);
    socket.userId = userData._id
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
            onClick={() => onUsernameSelection(friends)}
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
