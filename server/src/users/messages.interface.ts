import * as mongoose from 'mongoose';

interface IMessage extends mongoose.Document {
  sender: string;
  content: string;
  receiver:string,
}

export default IMessage;