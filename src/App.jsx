import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import MLProjectDetail from "./components/MLProjectDetail.jsx";
import HimaniPic from "./assets/Himani.jpg";

const Splash = ({ onProceed }) => {
  return (
    <div className="splash">
      <div className="splash__rings" />
      <div className="splash__content">
        <div className="splash__top">
          <div className="splash__avatar-ring">
            <img
              src={HimaniPic}
              alt="Himani Paudayal"
              className="splash__avatar-img"
            />
          </div>
          <p className="splash__tagline">ML · Full-stack</p>
          <div className="splash__typing">
            <span className="splash__typing-text">Hi!! I am Himani</span>
            <span className="splash__caret" />
          </div>
        </div>
        <button className="btn btn--primary splash__btn" onClick={onProceed}>
          $ sudo explore
        </button>
      </div>
    </div>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showSplash ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash]);

  const handleProceed = () => {
    setShowSplash(false);
  };

  return (
    <div className="app">
      {showSplash && <Splash onProceed={handleProceed} />}
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
