import * as mongoose from "mongoose";
import IUser from "./user.interface";
import IMessage from "./messages.interface";

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const MessagesSchema = new mongoose.Schema(
  {
    sender: String,
    content: String,
    receiver: String,
  },
  {
    timestamps: true,
  }
);

const UserModel: mongoose.Model<IUser> = mongoose.model("User", UserSchema);
const MessagesModel: mongoose.Model<IMessage> = mongoose.model(
  "Messages",
  MessagesSchema
);

export { UserModel, MessagesModel };
