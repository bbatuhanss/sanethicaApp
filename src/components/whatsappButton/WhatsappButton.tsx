import React from "react";
import styles from "./wp.module.css";

const WhatsappButton: React.FC = () => {
  const phone = "905384100034";
  const message = "Merhaba, Sanethica hakkında bilgi almak istiyorum.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className={styles.icon}
      />
      <span className={styles.text}>WhatsApp Destek Hattı</span>
    </a>
  );
};

export default WhatsappButton;
