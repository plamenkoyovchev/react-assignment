import React from "react";

import HomePage from "../../Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../Navigation/PrivateRoute";

import ItemsPage from "../../Pages/ItemsPage";
import ProgressPage from "../../Pages/ProgressPage";
import ProfilePage from "../../Pages/ProfilePage";
import AdministrationPage from "../../Pages/AdministrationPage";

import Navigation from "../Navigation/Navigation";

import { UserRoles } from "../../models/UserRoles";
import { User } from "../../store/users/userActionTypes";

interface IProps {
  currentUser?: User;
}

const AppRouter: React.FC<IProps> = ({ currentUser }) => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Navigation />
            <Switch>
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
                requiredRoles={[String(UserRoles.Admin)]}
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
    </>
  );
};

export default AppRouter;
