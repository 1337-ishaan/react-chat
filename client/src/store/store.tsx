export interface IStore {
  isAuthenticated: boolean;
  username: string;
  password: string;
  user:any,
  userData: [{}] | null;
  selectedUser: [{}] | null;
}

export const store: IStore = {
  isAuthenticated: false,
  username: "",
  password: "",
  user:null,
  userData: null,
  selectedUser: null,
};
