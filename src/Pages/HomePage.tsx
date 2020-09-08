import React from "react";

import Navigation from "../components/Navigation/Navigation";
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";

const HomePage = () => {
  const { currentUser } = useSelector((state: RootStore) => state.user);

  return <>{currentUser ? <Navigation /> : <LoginForm />}</>;
};

export default HomePage;
