import React, { useState } from "react";

import "./styles/App.css";
import AdminPage from "./pages/AdminPage";
import CustomerPage from "./pages/CustomerPage";
import { Context } from "./context/Context";

function App() {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  return isAdmin ? (
    <Context.Provider value={[isAdmin, setIsAdmin]}>
      <AdminPage
        isLoginFormOpen={isLoginFormOpen}
        setIsLoginFormOpen={setIsLoginFormOpen}
      />
    </Context.Provider>
  ) : (
    <Context.Provider value={[isAdmin, setIsAdmin]}>
      <CustomerPage
        isLoginFormOpen={isLoginFormOpen}
        setIsLoginFormOpen={setIsLoginFormOpen}
      />
    </Context.Provider>
  );
}

export default App;
