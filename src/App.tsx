import React, { useEffect, useState } from "react";
import "./App.css";

import AppRouter from "./components/Router/AppRouter";

import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/store";

import { setCurrentUser } from "./store/users/userActions";
import Loader from "./components/UI/Loader";

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const { currentUser } = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
    setAppLoaded(true);
  }, [dispatch]);

  if (!appLoaded) {
    return <Loader />;
  }

  return (
    <div className="App">
      <AppRouter currentUser={currentUser} />
    </div>
  );
}

export default App;
