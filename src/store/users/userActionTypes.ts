export const LOGIN_START = "LOGIN_START";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export type User = {
  username: string;
  roles: string[];
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

export type UserDispatchTypes = ILoginStart | ILoginFailure | ILoginSuccess;
