import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

  if (auth) {
    return <Navigate to="/logins" />;
  }

  return children;
};
