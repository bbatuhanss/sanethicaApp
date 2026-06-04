import React, { useEffect, useState } from "react";
import logo from "../../assets/images/icon.png";

function MaintenancePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');

        .maintenance-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f8f5f0;
          gap: 0;
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }

        .maintenance-wrapper::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(180,160,140,0.13) 0%, transparent 70%);
          pointer-events: none;
        }

        .maintenance-wrapper::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(180,160,140,0.10) 0%, transparent 70%);
          pointer-events: none;
        }

        .maintenance-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .maintenance-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .maintenance-logo {
          width: 130px;
          opacity: 0.92;
        }

        .maintenance-divider {
          width: 48px;
          height: 1px;
          background-color: #c2b09a;
        }

        .maintenance-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: 2rem;
          color: #3a3028;
          letter-spacing: 0.06em;
          margin: 0;
          text-align: center;
        }

        .maintenance-sub {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.82rem;
          color: #a0907e;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0;
          text-align: center;
        }
      `}</style>

      <div className="maintenance-wrapper">
        <div className={`maintenance-inner ${visible ? "visible" : ""}`}>
          <img src={logo} alt="Sanethica" className="maintenance-logo" />
          <div className="maintenance-divider" />
          <p className="maintenance-title">Bakımdayız</p>
          <p className="maintenance-sub">Yakında görüşürüz</p>
        </div>
      </div>
    </>
  );
}

export default MaintenancePage;
