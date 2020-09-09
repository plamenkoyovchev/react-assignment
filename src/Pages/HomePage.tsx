import React from "react";

import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";

import Loader from "../components/UI/Loader";
import { Redirect } from "react-router";

export const HomePage = () => {
  const { currentUser, loading } = useSelector(
    (state: RootStore) => state.user
  );

  if (loading) {
    return <Loader />;
  }

  return <>{currentUser ? <Redirect to="/items" /> : <LoginForm />}</>;
};

export default HomePage;
