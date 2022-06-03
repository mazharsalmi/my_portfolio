import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Profile />} />
        
      </Routes>
    </div>
  );
}