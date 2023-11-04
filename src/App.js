import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/App.css";
import { Context } from "./context/Context";
import AdminPage from "./pages/AdminPage";
import CustomerPage from "./pages/CustomerPage";
import Profile from "./pages/Profile";
import ProfileData from "./components/Profile/profileData/ProfileData";
import ProfileCash from "./components/Profile/profileCash/ProfileCash";
import ProfilePassword from "./components/Profile/profilePassword/ProfilePassword";
import ProfileAlerts from "./components/Profile/profileAlerts/ProfileAlerts";
import ProfileHistory from "./components/Profile/profileHistory/ProfileHistory";

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
              />
            ) : (
              <AdminPage
                setIsLoginFormOpen={setIsLoginFormOpen}
                isLoginFormOpen={isLoginFormOpen}
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
          path="/password"
          element={
            <Profile title="Пароль">
              <ProfilePassword />
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
      </Routes>
    </Context.Provider>
  );
}

export default App;
