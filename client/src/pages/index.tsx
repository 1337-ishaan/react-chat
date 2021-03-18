import React from "react";
import Contacts from "../modules/Contacts/Contacts";
import ChatScreen from "../modules/ChatScreen/ChatScreen";
import SelectedContactInfo from "../modules/SelectedContactInfo/SelectedContactInfo";

interface PropTypes {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredUsers: any;
  searchField: string;
}

const Home = (props: PropTypes) => {
  return (
    <div className="App">
      <div className="flex">
        <div className="w-1/4">
          <div className="p-3">
            <div className="flex items-center rounded-full shadow-md">
              <input
                className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                onChange={props.onSearchChange}
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
          <Contacts filteredUsers={props.filteredUsers} />
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
export default Home;
