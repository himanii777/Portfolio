// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";           // 👈 THIS LINE IS REQUIRED

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import MLProjectDetail from "./components/MLProjectDetail.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ml/:projectId" element={<MLProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
