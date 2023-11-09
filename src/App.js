import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/App.css";
import { Context } from "./context/Context";
import AdminPage from "./pages/landingPages/AdminPage";
import CustomerPage from "./pages/landingPages/CustomerPage";
import Profile from "./pages/patterns/ProfilePattern";
import ProfileData from "./components/Profile/profileData/ProfileData";
import ProfileCash from "./components/Profile/profileCash/ProfileCash";
import ProfilePassword from "./components/Profile/profilePassword/ProfilePassword";
import ProfileAlerts from "./components/Profile/profileAlerts/ProfileAlerts";
import ProfileHistory from "./components/Profile/profileHistory/ProfileHistory";
import Deposit from "./pages/profilePages/Deposit";
import GetMoney from "./pages/profilePages/GetMoney";
import CashPattern from "./pages/patterns/CashPattern";
import ChangePassword from "./components/Profile/profilePassword/ChangePassword";
import LowComission from "./pages/profilePages/LowComission";
import AuthorizedUserPattern from "./pages/patterns/AuthorizedUserPattern";
import AuthorizedAdminPage from "./pages/authorizedUser/admin/authorizedAdminPage/AuthorizedAdminPage";
import Creatives from "./pages/authorizedUser/admin/creatives/Creatives";
import Statistic from "./components/authorizedAdmin/statistic/Statistic";
import AuthorizedAdminHelp from "./pages/authorizedUser/admin/authorizedAdminHelp/AuthorizedAdminHelp";
import { Grid } from "@mui/material";

function App() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  return (
    <Context.Provider value={[isCustomer, setIsCustomer]}>
      <Routes>
        <Route
          path="/"
          element={
            isCustomer ? (
              <CustomerPage
                setIsLoginFormOpen={setIsLoginFormOpen}
                isLoginFormOpen={isLoginFormOpen}
                ismainpage={true}
              />
            ) : (
              <AdminPage
                setIsLoginFormOpen={setIsLoginFormOpen}
                isLoginFormOpen={isLoginFormOpen}
                ismainpage={true}
              />
            )
          }
        />

        <Route
          path="/profile"
          element={
            <Profile title="Настройка профиля">
              <ProfileData />
            </Profile>
          }
        />

        <Route
          path="/cash"
          element={
            <Profile title="Настройка профиля">
              <ProfileCash />
            </Profile>
          }
        />

        <Route
          path="/cash/deposit"
          element={
            <CashPattern isDeposit={true} title="Пополние">
              <Deposit />
            </CashPattern>
          }
        />

        <Route
          path="/cash/get-money"
          element={
            <CashPattern title="Вывод">
              <GetMoney />
            </CashPattern>
          }
        />

        <Route path="/cash/low-comission" element={<LowComission />} />

        <Route
          path="/password"
          element={
            <Profile title="Пароль">
              <ProfilePassword />
            </Profile>
          }
        />

        <Route
          path="/password/change-password"
          element={
            <Profile title="Новый пароль">
              <ChangePassword />
            </Profile>
          }
        />

        <Route
          path="/alerts"
          element={
            <Profile title="Настройка уведомлений">
              <ProfileAlerts />
            </Profile>
          }
        />

        <Route
          path="/history"
          element={
            <Profile title="История уведомлений">
              <ProfileHistory />
            </Profile>
          }
        />

        <Route
          path="/admin"
          element={
            <AuthorizedUserPattern ismainpage={true}>
              <AuthorizedAdminPage />
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/creatives"
          element={
            <AuthorizedUserPattern>
              <Grid item xs={10}>
                <Creatives />
              </Grid>
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/statistic"
          element={
            <AuthorizedUserPattern>
              <Grid item xs={10}>
                <Statistic />
              </Grid>
            </AuthorizedUserPattern>
          }
        />

        <Route
          path="/admin-help"
          element={
            <AuthorizedUserPattern>
              <AuthorizedAdminHelp />
            </AuthorizedUserPattern>
          }
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;
