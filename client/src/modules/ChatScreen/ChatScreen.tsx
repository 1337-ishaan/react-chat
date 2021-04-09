import React, { useState } from "react";
import socket from "../../socket";
import { RootState } from "../../index";
import { useSelector } from "react-redux";

const ChatScreen = () => {
  const [messageToSend, setMessageToSend] = useState("");
  const { userData, selectedUser } = useSelector(
    (state: RootState) => state.usersReducer
  );

  const { user, username } = useSelector(
    (state: RootState) => state.authReducer
  );
  console.log(user, userData, "usernaem");

  const onMessage = (content: any) => {
    console.log("messaging here");
    if (selectedUser) {
      socket.senderId = user._id;
      socket.receiverId = selectedUser._id;
      console.log(socket,"set selectedUser in socket")   
      // socket.on("private message", () => {
      console.log("socket message sent");
      socket.emit("private message",{
        sender: socket.senderId,
        content,
        receiver: socket.receiverId,
      });
      // });
      user.messages = [
        {
          content,
          fromSelf: true,
        },
      ];
    }
  };

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
          onChange={(e) => setMessageToSend(e.target.value)}
          type="text"
          placeholder="Type..."
          className="rounded-full px-3 py-3 w-3/5 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-11/12 bottom-0"
        />
        <button onClick={() => onMessage(messageToSend)}>Send Message</button>
      </div>
    </>
  );
};

export default ChatScreen;
