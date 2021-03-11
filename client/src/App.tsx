import React, { useEffect, useState } from "react";
import "./App.css";
// import AuthHandler from "./modules/Auth/AuthHandler";
// import SearchBox from "./modules/utils/SearchBox";
import Contacts from "./modules/Contacts/Contacts";
import ChatScreen from "./modules/ChatScreen/ChatScreen";
import SelectedContactInfo from "./modules/SelectedContactInfo/SelectedContactInfo";
import { useFetch } from "./modules/useFetch";

const App = () => {
  // const [users, setUsers] = useState();
  const [searchField, setSearchField] = useState("");
  //  useEffect(() => {

  // FIXME: make searchbox working
  const users = useFetch("http://172.105.61.111:3010/data");
  // console.log(data,"WORK")
  // var filteredUsers: any = users;
  // const searchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const userSearchedInput = e.target.value;
  //   // let userEntries = [];
  //   for (let key in filteredUsers) {
  //     // users.filter((user: any) =>
  //     userSearchedInput === users[key].username
  //       ? filteredUsers.push(filteredUsers[key])
  //       : (filteredUsers = users);
  //     // : filteredUsers.push(users[key]);
  //     // );
  //   }

  //   console.log(filteredUsers);
  //   // for(let key in filteredUsers)
  //   // filteredUsers = users.filter((user: any) =>
  //   //   userSearchedInput.includes(users.username)
  //   //     ? (filteredUsers = user)
  //   //     : filteredUsers.push()
  //   // );
  //   return () => filteredUsers;
  // };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  const filteredUsers = users && users.filter((user: any) => {
    
    return user.username.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="App">
      <div className="flex">
        <div className="w-1/4">
          <div className="p-3">
            <div className="flex items-center rounded-full shadow-md">
              <input
                className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                onChange={onSearchChange}
                type="text"
                placeholder="Search"
              />
              <div className="p-4">
                <button className="text-white rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
                  <img
                    alt="search"
                    src="https://img.icons8.com/pastel-glyph/2x/search--v2.png"
                  />
                </button>
              </div>
            </div>
          </div>
          <Contacts users={filteredUsers} />
        </div>
        <div className="flex-grow">
          <ChatScreen />
        </div>
        <div className="w-1/4">
          <SelectedContactInfo />
        </div>
      </div>
    </div>
  );
};

export default App;
