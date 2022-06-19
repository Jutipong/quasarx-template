export interface Login {
  User: User;
  Option: Option;
}

export interface User {
  UserName: string;
  Password: string;
}
export interface Option {
  Loading: boolean;
  ShowPassword: boolean;
}
