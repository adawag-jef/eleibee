import React from "react";
import { Route, Redirect } from "react-router-dom";

const UnAuthenticatedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated) {
          return (
            <Redirect
              to={{ pathname: "/admin", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    ></Route>
  );
};

export default UnAuthenticatedRoute;
