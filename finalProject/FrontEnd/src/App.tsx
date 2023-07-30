import "./App.css";
import React from "react";
import LoginPage from "./components/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import AboutUsPage from "./components/aboutUs";
import ShopPage from "./components/Shop";
import HomePage from "./components/Home2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
