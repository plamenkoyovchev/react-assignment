import React, { useEffect } from "react";
import "./App.css";

import AppRouter from "./components/Router/AppRouter";

import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/store";

import { setCurrentUser } from "./store/users/userActions";

function App() {
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter currentUser={currentUser} />
    </div>
  );
}

export default App;
