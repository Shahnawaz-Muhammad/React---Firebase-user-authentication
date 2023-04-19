import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { currentUser } = UserAuth();
//   console.log("protected route user---------->", currentUser.role)
  let location = useLocation();

//   if (!allowedRoles.includes(currentUser.role)) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
