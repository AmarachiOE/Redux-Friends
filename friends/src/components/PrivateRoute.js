import React from "react";
import { Route, Redirect } from "react-router-dom";

// this component is good for any route that needs to be protected
// replaces <Route /> for components... everything else is the same

// Requirements
// 1. Must have same API as React <Route/> component (through ...rest)
// 2. Must render a <Route /> and pass all the props through to it {}...rest}
// 3. Must check for a token: if user is authed,
// then render the component (with the render prop)
// otherwise, redirect use to /login

// DESTRUCTOR PROPS
// destructor (props) to = ({exact, path, component }) = ({ component: Component, ...rest})
// ... rest = rest of props
// so we don't have to call props.whatever by destructoring props

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          // redirect to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
