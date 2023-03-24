import React from "react";
import { Dashboard, Footer, LoginPage } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
