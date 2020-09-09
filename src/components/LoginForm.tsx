import React, { useState } from "react";
import "./LoginForm.css";

import { useDispatch } from "react-redux";
import { login } from "../store/users/userActions";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInput()) {
      return;
    }

    dispatch(login(username, password));
  };

  const onUsernameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUsername(value);
    setUsernameError("");
  };

  const onPasswordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPassword(value);
    setPasswordError("");
  };

  const validateInput = () => {
    if (!username) {
      setUsernameError("Username is required!");
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Password is required!");
    } else {
      setPasswordError("");
    }

    const isValid = username !== "" && password !== "";

    return isValid;
  };

  return (
    <>
      <div className="login-form-container">
        <h3>Sign In</h3>
        <form className="login-form" onSubmit={submitHandler}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={onUsernameChangeHandler}
            />
            {usernameError && (
              <div>
                <label className="validation-error">{usernameError}</label>
              </div>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChangeHandler}
            />
            {passwordError && (
              <div>
                <label className="validation-error">{passwordError}</label>
              </div>
            )}
          </div>
          <div>
            <button className="submit-btn" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
