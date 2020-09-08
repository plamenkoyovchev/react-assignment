import React, { useEffect } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/store";

import { setCurrentUser } from "./store/users/userActions";

import HomePage from "./Pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";

import ItemsPage from "./Pages/ItemsPage";
import ProgressPage from "./Pages/ProgressPage";
import ProfilePage from "./Pages/ProfilePage";
import AdministrationPage from "./Pages/AdministrationPage";

import Navigation from "./components/Navigation/Navigation";

function App() {
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navigation />
            <Switch>
              <Route
                path="/auth"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <LoginForm />
                }
              />
              <Route path="/items" component={ItemsPage} />
              <Route path="/progress" component={ProgressPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/administration" component={AdministrationPage} />
            </Switch>
          </>
        )}
      />
    </div>
  );
}

export default App;
