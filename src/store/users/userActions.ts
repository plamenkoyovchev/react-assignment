import {
  UserDispatchTypes,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  ILoginStart,
  ILoginSuccess,
  ILoginFailure,
} from "./userActionTypes";
import users from "../../data/users.json";

import { Dispatch } from "redux";

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const loginStart = (): ILoginStart => {
  return {
    type: LOGIN_START,
  };
};

const loginSuccess = (loggedUser: any): ILoginSuccess => {
  return {
    type: LOGIN_SUCCESS,
    payload: loggedUser,
  };
};

const loginFailure = (error: string): ILoginFailure => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

export const login = (username: string, password: string) => async (
  dispatch: Dispatch<UserDispatchTypes>
) => {
  dispatch(loginStart());
  await wait(1000);
  const loggedUser = users.find(
    (u) => u.username === username && u.password === password
  );
  if (loggedUser) {
    dispatch(loginSuccess(loggedUser));
  } else {
    dispatch(loginFailure("Login failed."));
  }
};
