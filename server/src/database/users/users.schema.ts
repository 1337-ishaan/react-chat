import { Schema } from "mongoose";

export const UserSchema = new Schema({
  username: String,
  password: String,
  bio: String,
  imageData: {
    data: Buffer,
    contentType: String,
  },
  fileData: {
    data: Buffer,
    contentType: String,
  },
  profilePhoto: {
    data: Buffer,
    contentType: String,
  },
  messages: [
    {
      sentBy: String,
      messageContent: String || { data: Buffer, contentType: String }, // incase it can be a string or file or a photo
    },
  ],
});
