import React, { useState } from "react";
import "./LoginForm.css";

import { useDispatch } from "react-redux";
import { login } from "../store/users/userActions";
import TextInput from "./UI/Form/TextInput";

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
    if (hasWhitespace(value)) {
      setUsernameError("Whitespaces are not allowed!");
    } else {
      setUsername(value);
      setUsernameError("");
    }
  };

  const onPasswordChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (hasWhitespace(value)) {
      setPasswordError("Whitespaces are not allowed!");
    } else {
      setPassword(value);
      setPasswordError("");
    }
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

  const hasWhitespace = (text: string) => {
    return text.indexOf(" ") >= 0;
  };

  return (
    <>
      <div className="login-form-container">
        <h3>Sign In</h3>
        <form className="login-form" onSubmit={submitHandler}>
          <TextInput
            type="text"
            name="username"
            value={username}
            changed={onUsernameChangeHandler}
            placeholder="Username"
            error={usernameError}
          />
          <TextInput
            type="password"
            name="password"
            value={password}
            changed={onPasswordChangeHandler}
            placeholder="Password"
            error={passwordError}
          />
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
