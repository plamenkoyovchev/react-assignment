import React from "react";

import Navigation from "../components/Navigation/Navigation";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";

import Loader from "../components/UI/Loader";

const HomePage = () => {
  const { loggedIn, loading } = useSelector((state: RootStore) => state.user);

  if (loading) {
    return <Loader />;
  }

  return <>{loggedIn ? <Navigation /> : <LoginForm />}</>;
};

export default HomePage;
