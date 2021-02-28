import * as mongoose from "mongoose";
import User from "./user.interface";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});


export const UserModel = mongoose.model<User & mongoose.Document>("User", UserSchema);



