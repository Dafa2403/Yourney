import React from "react";
import { useLocation, Navigate, Outlet, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DefaultLayout = React.lazy(() => import("../../layout/DefaultLayout"));

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log("tstas", auth.user);

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/adminYourney/dashboard" replace />
  );
};

export default RequireAuth;
