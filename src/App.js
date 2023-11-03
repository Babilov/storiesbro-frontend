import React, { useState } from "react";

import "./styles/App.css";
import AdminPage from "./pages/AdminPage";
import CustomerPage from "./pages/CustomerPage";
import { Context } from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <Context.Provider value={[isAdmin, setIsAdmin]}>
      <Routes>
        <Route path="/" element={isAdmin ? <AdminPage /> : <CustomerPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
