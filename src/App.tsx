import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { RootStore } from "./store/store";

import HomePage from "./Pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";

import ItemsPage from "./Pages/ItemsPage";
import ProgressPage from "./Pages/ProgressPage";
import ProfilePage from "./Pages/ProfilePage";
import AdministrationPage from "./Pages/AdministrationPage";

import Navigation from "./components/Navigation/Navigation";

function App() {
  const { loggedIn } = useSelector((state: RootStore) => state.user);

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
                render={() => (loggedIn ? <Redirect to="/" /> : <LoginForm />)}
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
