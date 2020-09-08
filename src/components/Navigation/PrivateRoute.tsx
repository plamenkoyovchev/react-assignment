import React from "react";
import { Route, RouteComponentProps, Redirect } from "react-router";

interface IProps {
  Component: any;
  path: string;
  exact?: boolean;
  requiredRoles: string[];
  userRole?: string;
}

const PrivateRoute: React.FC<IProps> = ({
  Component,
  path,
  exact = false,
  requiredRoles,
  userRole,
}) => {
  const userHasAccess = requiredRoles.includes(userRole || "");
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        userHasAccess ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
