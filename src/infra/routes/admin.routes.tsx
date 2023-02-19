import { AppContext } from "@presentation/context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute: React.FC = () => {
  const token = localStorage.getItem("token");
  const { user } = useContext(AppContext)

  if (!token)
    return <Navigate replace to="/login" />;

  if (!user?.isAdmin) return <Navigate replace to="/unauthorized" />;

  return <Outlet />;
};

export default PrivateAdminRoute;
