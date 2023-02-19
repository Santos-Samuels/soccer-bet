import { Navigate, Outlet } from "react-router-dom";

const PrivateUserRoute: React.FC = () => {
  const token = localStorage.getItem("token");

  if (!token)
    return <Navigate replace to="/login" />;

  return <Outlet />;
};

export default PrivateUserRoute;
