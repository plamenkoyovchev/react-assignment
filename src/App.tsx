import React, { useEffect } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "./store/store";

import { setCurrentUser } from "./store/users/userActions";

import HomePage from "./Pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/Navigation/PrivateRoute";

import LoginForm from "./components/LoginForm";

import ItemsPage from "./Pages/ItemsPage";
import ProgressPage from "./Pages/ProgressPage";
import ProfilePage from "./Pages/ProfilePage";
import AdministrationPage from "./Pages/AdministrationPage";

import Navigation from "./components/Navigation/Navigation";

import { UserRoles } from "./models/UserRoles";

function App() {
  const { currentUser } = useSelector((state: RootStore) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

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
              <PrivateRoute
                path="/items"
                Component={ItemsPage}
                userRole={currentUser?.role}
                requiredRoles={[
                  String(UserRoles.Admin),
                  String(UserRoles.User),
                ]}
              />
              <PrivateRoute
                path="/progress"
                Component={ProgressPage}
                userRole={currentUser?.role}
                requiredRoles={[String(UserRoles.User)]}
              />
              <PrivateRoute
                path="/profile"
                Component={ProfilePage}
                userRole={currentUser?.role}
                requiredRoles={[
                  String(UserRoles.Admin),
                  String(UserRoles.User),
                ]}
              />
              <PrivateRoute
                path="/administration"
                Component={AdministrationPage}
                userRole={currentUser?.role}
                requiredRoles={[String(UserRoles.Admin)]}
              />
            </Switch>
          </>
        )}
      />
    </div>
  );
}

export default App;
