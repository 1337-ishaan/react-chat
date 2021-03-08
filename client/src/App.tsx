import React, { useEffect } from "react";
import "./App.css";
import AuthHandler from "./modules/Auth/AuthHandler";
import SearchBox from "./modules/utils/SearchBox";
import Contacts from './modules/Contacts/Contacts';

const App = () => {
  return (
    <div className="App">
      <div className="grid grid-cols-4 ">
        <div className="">
          <SearchBox />
          <Contacts />
        </div>
        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 col-start-2 col-span-2 ">
          2
        </div>
        {/* <div>3</div> */}
      </div>
    </div>
  );
};

export default App;
