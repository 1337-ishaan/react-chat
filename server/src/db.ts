import Mongoose = require("mongoose");

let database: Mongoose.Connection;
export const connect = () => {
  // add your own uri below
  const uri =
    "mongodb+srv://1337_ishaan:Ishaan@2000@cluster0.mqaxm.mongodb.net/chat?retryWrites=true&w=majority";
  console.log(uri);
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};

export { database };
