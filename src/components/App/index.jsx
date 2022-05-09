﻿import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserContext from "../../contexts/UserContext";

import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";
import { Transactions } from "../Transactions";
import { AddTransaction } from "../Transactions/AddTransaction";

import GlobalStyles from "../../assets/styles/globalStyles";

// TODO use local storage to keep user session on page reload.
// TODO remove token from context and local storage, then redirect user to Sign-in page Logou button is clicked

export function App() {
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/income" element={<AddTransaction />} />
          <Route path="/transactions/expense" element={<AddTransaction />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}
