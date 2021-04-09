import React, { useState, useEffect } from "react";
import "./App.css";
// import AuthHandler from "./modules/Auth/AuthHandler";
// import SearchBox from "./modules/utils/SearchBox";
import { useFetch } from "./modules/useFetch";
import { RootState } from "./index";
import Home from "./pages";
import AuthHandler from "./modules/Auth/AuthHandler";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_USERS } from "./store/types/actionTypes";
// import RootState from './index';
import { io } from "socket.io-client/build/index";
import socket  from "./socket";

const App = () => {
  // const [users, setUsers] = useState();
  const users = useFetch("http://172.105.61.111:3010/data");
  const [searchField, setSearchField] = useState("");
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authReducer
  );
  const { userData } = useSelector((state: RootState) => state.usersReducer);

  useEffect(() => {
    const [name, room] = ["Ishaan", 12];
    console.log(room);
    // let socket = io("http://172.105.61.111:3010");
    console.log(socket);
    socket.emit("chat message", "Ishaan heree");
  });

  console.log(userData, "user  data");
  const dispatch = useDispatch();
  // console.log(username, "USERNAME")
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    dispatch({ type: FETCH_USERS, payload: { userData: users } });
  }, [users, userData, dispatch]);

  const filteredUsers =
    // users &&
    userData &&
    userData.filter((user: any) => {
      return user.username.toLowerCase().includes(searchField.toLowerCase());
    });

  console.log(filteredUsers, "filteredUsers");

  return (
    <>
      {!isAuthenticated ? (
        <AuthHandler />
      ) : (
        <Home
          filteredUsers={filteredUsers}
          onSearchChange={onSearchChange}
          searchField={searchField}
        />
      )}
    </>
  );
};

export default App;
