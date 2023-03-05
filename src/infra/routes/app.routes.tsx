import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateUserRoute from "./user.routes";
import PrivateAdminRoute from "./admin.routes";
import {
  LoginPage,
  MatchesPage,
  MyBetsPage,
  NotFoundPage,
  RegisterPage,
  ResultsPage,
  UnauthorizedPage,
  HomePage,
} from "@presentation/pages";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PrivateUserRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/my-bets" element={<MyBetsPage />} />

          <Route element={<PrivateAdminRoute />}>
          </Route>
        </Route>

        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
