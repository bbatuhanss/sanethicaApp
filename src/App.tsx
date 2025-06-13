import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Article from "pages/article/article";
import DiyetPage from "pages/services/DiyetPage";
import IncelmePage from "pages/services/IncelmePage";
import WellnessPage from "pages/services/WellnessPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <div
        style={{ minHeight: "99vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article" element={<Article />} />
            <Route path="/hizmetler/diyet" element={<DiyetPage />} />
            <Route path="/hizmetler/incelme" element={<IncelmePage />} />
            <Route path="/hizmetler/wellness" element={<WellnessPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
