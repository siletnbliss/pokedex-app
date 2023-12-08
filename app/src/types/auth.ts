export interface AuthenticateUserParams {
  user: string;
  pass: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
}

export interface AuthenticateUserResponse {
  token: string;
  user: User;
}
