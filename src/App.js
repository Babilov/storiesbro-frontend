import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/App.css";
import { Context } from "./context/Context";
import AdminPage from "./pages/AdminPage";
import CustomerPage from "./pages/CustomerPage";
import Profile from "./pages/Profile";
import ProfileData from "./components/Profile/ProfileData";
import ProfileCash from "./components/Profile/ProfileCash";
import ProfilePassword from "./components/Profile/ProfilePassword";
import ProfileAlerts from "./components/Profile/ProfileAlerts";
import ProfileHistory from "./components/Profile/ProfileHistory";

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
            <Profile>
              <ProfileData />
            </Profile>
          }
        />

        <Route
          path="/cash"
          element={
            <Profile>
              <ProfileCash />
            </Profile>
          }
        />

        <Route
          path="/password"
          element={
            <Profile>
              <ProfilePassword />
            </Profile>
          }
        />

        <Route
          path="/alerts"
          element={
            <Profile>
              <ProfileAlerts />
            </Profile>
          }
        />

        <Route
          path="/history"
          element={
            <Profile>
              <ProfileHistory />
            </Profile>
          }
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;
