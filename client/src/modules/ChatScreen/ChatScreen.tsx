import React, { useState, useEffect } from "react";
import socket from "../../socket";
import { RootState } from "../../index";
import { useSelector } from "react-redux";

const ChatScreen = ({ messagesData }: any) => {
  const [messageToSend, setMessageToSend] = useState("");
  const { userData, selectedUser } = useSelector(
    (state: RootState) => state.usersReducer
  );

  const { user } = useSelector((state: RootState) => state.authReducer);
  console.log(user, userData, "username");

  // useEffect(() => {
  //   for (let key in messagesData) {
  //     if (messagesData[key].sender === user._id) {
  //       setSenderMessages([messagesData[key]]);
  //     }
  //     if (messagesData[key].receiver === (selectedUser && selectedUser._id)) {
  //       setReceiverMessages([...receiverMessages, messagesData[key]]);
  //     }
  //   }
  // }, [messagesData]);

  const onMessage = (content: any) => {
    console.log("messaging here");
    if (selectedUser) {
      socket.senderId = user._id;
      socket.receiverId = selectedUser._id;
      console.log(socket, "set selectedUser in socket");
      // socket.on("private message", () => {
      console.log("socket message sent");
      socket.emit("private message", {
        sender: socket.senderId,
        content,
        receiver: socket.receiverId,
      });
    }
  };

  return (
    <>
      {messagesData &&
        messagesData.map((data: any, i: number) =>
          // map all the message data but we only need to see if the
          data.sender === user._id ? (
            // data.receiver === (selectedUser && selectedUser._id)) &&
            <>
              <div
                className={`w-2/4 m-3 p-3 rounded-r-lg rounded-full shadow-xl float-right text-green-500 `}
                key={i}
              >
                {data.content}
              </div>
              {/* <div>Receiver - {data.receiver}</div>
                <div>Sender - {data.sender}</div> */}
            </>
          ) : (
            <>
              <div
                className={`w-2/4 m-3 p-3 rounded-r-lg rounded-full shadow-xl float-left text-white`}
                key={i}
              >
                {data.content}
              </div>
              {/* <div>Receiver - {data.receiver}</div>
                <div>Sender - {data.sender}</div> */}
            </>
          )
        )}

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
