import React from "react";
import { connect, ConnectedProps } from "react-redux";

import Navigation from "../components/Navigation/Navigation";
import LoginForm from "../components/LoginForm";

const mapStateToProps = (state: any) => ({
  user: state.currentUser,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const HomePage = (props: PropsFromRedux) => {
  const { user } = props;

  console.log(user);
  return <>{user ? <Navigation /> : <LoginForm />}</>;
};

export default connector(HomePage);
