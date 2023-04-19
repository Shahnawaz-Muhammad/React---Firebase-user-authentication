import { Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function PrivateRoute({ allowedRoles,children }) {
  const {
    currentUser:authUser,
    isAuthenticated,
    userRole,
  } = UserAuth();

  // console.log("protected user", authUser?.map(user => user.role.includes("admin")))

  if (authUser && isAuthenticated ) {
    return authUser ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
  }

  // if (!allowedRoles.includes("patient")) {
  //   return <Navigate to="/login" />;
  // }

  return children ;
}