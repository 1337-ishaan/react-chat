import React from "react";
import SearchBox from "../utils/SearchBox";

const Contacts = () => {
  const userData = [
    {
      username: "Ishaan",
      lastMessage: "Good",
    },
    {
      username: "Mike",
      lastMessage: "ik i'm good",
    },
    {
      username: "Mpeters",
      lastMessage: "issokay",
    },
    {
      username: "Jack",
      lastMessage: "issokay",
    },  {
      username: "Noland",
      lastMessage: "issokay",
    },  {
      username: "Zoomie",
      lastMessage: "issokay",
    },  {
      username: "My man",
      lastMessage: "issokay",
    },
  ];

  return (
    <>
      {userData.map((friends, i) => (
        <div className="flex hover:shadow-inner rounded-full shadow m-3 justify-start p-3 pr-3">
          <img
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            alt="user"
            className="h-14 "
          />
          <div key={i} className="text-left	pl-3">
            <div className="text-2xl">{friends.username}</div>
            <div className="base">{friends.lastMessage}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Contacts;
