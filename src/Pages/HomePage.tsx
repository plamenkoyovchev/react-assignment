import React from "react";

import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";

import Loader from "../components/UI/Loader";
import Navigation from "../components/Navigation/Navigation";

export const HomePage = () => {
  const { currentUser, loading } = useSelector(
    (state: RootStore) => state.user
  );

  if (loading) {
    return <Loader />;
  }

  return <>{currentUser ? <Navigation /> : <LoginForm />}</>;
};

export default HomePage;
