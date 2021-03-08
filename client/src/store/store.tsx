export interface IStore {
  isAuthenticated: boolean;
  username: string;
  password: string;
}

export const store : IStore = {
  isAuthenticated: false,
  username: "",
  password: "",
};

