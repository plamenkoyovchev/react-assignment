import React from "react";

import "./Profile.css";
import { useSelector } from "react-redux";
import { RootStore } from "../store/store";

const Profile = () => {
  const { currentUser } = useSelector((state: RootStore) => state.user);

  return (
    <div className="page">
      <p>Hello, {currentUser?.username}</p>
      <ul>
        Your roles are:
        {currentUser?.roles.map((role) => (
          <li>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
