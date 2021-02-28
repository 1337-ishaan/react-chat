export interface IUser {
  username: string;
  password: string;
  messages: IMessages[] | null;
  bio: string;
  imageData?: File | string | HTMLInputElement;
  fileData?: File | string | HTMLInputElement;
}

export interface IMessages {
  sentBy: string;
  messageContent: string;
}
