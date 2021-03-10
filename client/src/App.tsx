import React, { useEffect } from "react";
import "./App.css";
import AuthHandler from "./modules/Auth/AuthHandler";
import SearchBox from "./modules/utils/SearchBox";
import Contacts from "./modules/Contacts/Contacts";
import ChatScreen from "./modules/ChatScreen/ChatScreen";
import SelectedContactInfo from "./modules/SelectedContactInfo/SelectedContactInfo";

const App = () => {
  useEffect(() => {
    fetch()
  },[])



  return (
    <div className="App">
      <div className="flex">
        <div className="w-1/4">
          <SearchBox />
          <Contacts />
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
