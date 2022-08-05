import React from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";

import { Home } from "./pages/home";
import { Main } from "./pages/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":username" element={<Main />} />
    </Routes>
  );
}

export default App;
