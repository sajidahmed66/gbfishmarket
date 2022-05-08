import React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";

interface IProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children, ...rest }: IProtectedRouteProps) => {
  const location = useLocation();
  console.log("Protected Route", location);
  if (isAuthenticated()) {
    return children;
  }
  return (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );
};

export default ProtectedRoute;
