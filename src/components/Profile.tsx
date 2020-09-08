import React from "react";

import "./Profile.css";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";

const Profile = () => {
  const { currentUser } = useSelector((state: RootStore) => state.user);

  return (
    <div className="page">
      <p>Hello, {currentUser?.username}</p>
      <p>
        Your role is: <strong>{currentUser?.role}</strong>
      </p>
    </div>
  );
};

export default Profile;
