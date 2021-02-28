import Mongoose = require("mongoose");
import { UserModel } from "./users/users.model";
let database: Mongoose.Connection;
export const connect = () => {
  // add your own uri below
  console.log(process.env.MONGO_URI);
  const uri =
    "mongodb+srv://ishaan_parmar:Ishaan@2000@cluster0.ny43b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  console.log(uri);
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
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
