import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import MaintenancePage from "pages/maintenance/MaintenancePage";

const MAINTENANCE_MODE = true;
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
      ></div>
    </Router>
  );
}

export default App;
