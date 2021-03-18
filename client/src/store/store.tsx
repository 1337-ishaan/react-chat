export interface IStore {
  isAuthenticated: boolean;
  username: string;
  password: string;
  userData: [{}] | null;
  selectedUser: [{}] | null;
}

export const store: IStore = {
  isAuthenticated: false,
  username: "",
  password: "",
  userData: null,
  selectedUser: null,
};
