import { Route, redirect } from "react-router";

export const PublicRoute = ({ children, isLogin, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isLogin & restricted ? redirect("/") : children)}
    />
  );
};

export const PrivateRoute = ({ children, isLogin, restricted, ...rest }) => {
  return (
    <Route {...rest} render={() => (isLogin ? redirect("/login") : children)} />
  );
};
