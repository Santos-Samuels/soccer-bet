import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute: React.FC = () => {
  const TOKEN = localStorage.getItem("TOKEN");
  const USER_TYPE = localStorage.getItem("USER_TYPE");

  if (TOKEN === "undefined" || USER_TYPE === "undefined")
    return <Navigate replace to="/login" />;

  if (USER_TYPE !== "ADMIN")
    return <Navigate replace to="/unauthorized" />;

  return <Outlet />;
};

export default PrivateAdminRoute;
