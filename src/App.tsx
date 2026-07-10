import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import IncelmePage from "pages/services/IncelmePage";
import MessagePage from "pages/services/MassagePage";
import AOS from "aos";
import BlogDetail from "pages/blog/blogDetail";
import Contact from "pages/contact/contact";
import WhatsappButton from "components/whatsappButton/WhatsappButton";
import MaintenancePage from "pages/maintenance/MaintenancePage";
import LaserPage from "pages/services/LaserPage";
import SkinCarePage from "pages/services/SkinCarePage";
const MAINTENANCE_MODE = false;

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

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
            <Route path="/contact" element={<Contact />} />
            <Route path="/hizmetler/incelme" element={<IncelmePage />} />
            <Route path="/hizmetler/massage" element={<MessagePage />} />
            <Route path="/hizmetler/lazer" element={<LaserPage />} />
            <Route path="/hizmetler/cilt-bakimi" element={<SkinCarePage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
          <WhatsappButton />
        </div>
      </div>
    </Router>
  );
}

export default App;
