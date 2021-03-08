import * as mongoose from "mongoose";
import IUser from "./user.interface";



const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});


export const UserModel: mongoose.Model<IUser> = mongoose.model(
  "User",
  UserSchema
);
