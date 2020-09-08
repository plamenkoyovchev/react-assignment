export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGOUT = "LOGOUT";

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export type User = {
  username: string;
  role: string;
};

export interface ILoginStart {
  type: typeof LOGIN_START;
}

export interface ILoginFailure {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export interface ILoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

export interface ILogout {
  type: typeof LOGOUT;
}

export interface ISetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload?: User;
}

export type UserDispatchTypes =
  | ILoginStart
  | ILoginFailure
  | ILoginSuccess
  | ILogout
  | ISetCurrentUser;
