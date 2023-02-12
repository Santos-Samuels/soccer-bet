import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateUserRoute from "./user.routes";
import PrivateAdminRoute from "./admin.routes";
import {
  AccountPage,
  AddResultPage,
  LoginPage,
  MyBetsPage,
  NotFoundPage,
  RegisterPage,
  ResultsPage,
  ToBetPage,
  UnauthorizedPage,
} from "../../presentation/pages";
import { MatchesPageFactory } from "../factories/pages/matchesPageFactory";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PrivateUserRoute />}>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
          <Route path="/matches" element={<MatchesPageFactory />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/my-bets" element={<MyBetsPage />} />
          <Route path="/to-bet" element={<ToBetPage />} />
          <Route path="/account" element={<AccountPage />} />

          <Route element={<PrivateAdminRoute />}>
            <Route path="/results/add" element={<AddResultPage />} />
          </Route>
        </Route>

        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
