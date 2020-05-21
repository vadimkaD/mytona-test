import React from "react";
import { useSelector } from "react-redux";
import { Route, RouteProps, useLocation, Redirect } from "react-router-dom";
import { isAuthenticated as isAuthenticatedSelector } from "../../Auth/__redux/Auth.selectors";

const PrivateRoute: React.FunctionComponent<RouteProps> = props => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    );
  }

  return <Route {...props} />;
};

export default PrivateRoute;
