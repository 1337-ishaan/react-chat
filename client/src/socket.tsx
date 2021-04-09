const  { io } = require("socket.io-client");

const URL = "http://172.105.61.111:3010";
const socket = io(URL, { autoConnect: false });

socket.onAny((event:any, ...args:any) => {
  console.log(event, args);
});

export default socket;