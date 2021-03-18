import React, { useState } from "react";
import socket from "../../socket";
// const socket = require("socket.io-client");

const ChatScreen = () => {
  socket.on("users", (users: any) => {
    users.forEach((user: any) => {
      user.self = user.userID === socket.id;
      // initReactiveProperties(user);
    });
    // put the current user first, and then sort by username
    users = users.sort((a: any, b: any) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
  });

  // const onMessage = (content) => {
  //   if (this.selectedUser) {
  //     socket.emit("private message", {
  //       content,
  //       to: this.selectedUser.userID,
  //     });
  //     this.selectedUser.messages.push({
  //       content,
  //       fromSelf: true,
  //     });
  //   }
  // };

  const [myMessages, setMyMessages] = useState([
    {
      message: "Hey",
      timestamp: new Date(),
    },
    {
      message: "Im good",
      timestamp: new Date(),
    },
    {
      message: "how are you",
      timestamp: new Date(),
    },
  ]);

  const [receivedMessages, setReceivedMessages] = useState([
    {
      message: "Hii",
      timestamp: new Date(),
    },
    {
      message: "Yeah im good",
      timestamp: new Date(),
    },
    {
      message: "yo",
      timestamp: new Date(),
    },
  ]);
  return (
    <>
      {myMessages.map((text, i) => (
        <div
          className="w-2/4 m-3 p-3 rounded-r-lg rounded-full shadow-xl float-right"
          key={i}
        >
          {text.message}
        </div>
      ))}
      {receivedMessages.map((text, i) => (
        <div
          className="w-2/4 m-3 p-3 rounded-l-lg float-left rounded-full shadow-xl"
          key={i}
        >
          {text.message}
        </div>
      ))}
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Type..."
          className="rounded-full px-3 py-3 w-3/5 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-11/12 bottom-0"
        />
      </div>
    </>
  );
};

export default ChatScreen;
