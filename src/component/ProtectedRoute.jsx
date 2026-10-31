
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

  const user = localStorage.getItem("currentUser");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
