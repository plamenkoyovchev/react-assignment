import {
  UserDispatchTypes,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_CURRENT_USER,
  ILoginStart,
  ILoginSuccess,
  ILoginFailure,
  ILogout,
  ISetCurrentUser,
  User,
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

const loginSuccess = (loggedUser: User): ILoginSuccess => {
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

const signout = (): ILogout => {
  return {
    type: LOGOUT,
  };
};

const setUser = (user: User): ISetCurrentUser => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
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
    localStorage.setItem("user", JSON.stringify(loggedUser));
  } else {
    dispatch(loginFailure("Login failed."));
    localStorage.removeItem("user");
  }
};

export const setCurrentUser = () => (dispatch: Dispatch<UserDispatchTypes>) => {
  const currentUser = localStorage.getItem("user");
  let user = null;
  if (currentUser) {
    user = JSON.parse(currentUser);
  }

  dispatch(setUser(user));
};

export const logout = () => (dispatch: Dispatch<UserDispatchTypes>) => {
  localStorage.removeItem("user");
  dispatch(signout());
};
