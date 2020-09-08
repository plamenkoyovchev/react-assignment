import React, { useState } from "react";
import "./LoginForm.css";

import { useDispatch } from "react-redux";
import { login } from "../store/users/userActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  const onUsernameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUsername(value);
  };

  const onPasswordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPassword(value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={onUsernameChangeHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChangeHandler}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
