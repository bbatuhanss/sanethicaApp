import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './detail.module.css';
import wellnessImg from '../../assets/images/wellness.png';

const WellnessPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.detailContainer}>
      <img src={wellnessImg} alt="Wellness" className={styles.image} />
      <h1>Wellness Uygulamaları</h1>
      <p>
        Wellness, yalnızca dış görünüm değil; ruhsal, zihinsel ve fiziksel dengeyi hedefler.
        <br /><br />
        <strong>Sanethica</strong>’da sunduğumuz wellness uygulamaları:
        <br /><br />
        🔹 Meditasyon ve nefes terapileri<br />
        🔹 Mindfulness çalışmaları<br />
        🔹 Bitkisel detokslar<br />
        🔹 İyonik ayak detoksu, EMShape, sauna seansları
        <br /><br />
        Günümüzde stres kaynaklı hastalıklar ciddi boyutlara ulaşırken, wellness desteği hem önleyici hem de iyileştirici bir rol oynar.
        <br /><br />
        Sanethica’da, yalnızca diyet değil; tam kapsamlı bir sağlık yolculuğu sizi bekliyor.
      </p>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>← Geri</button>
    </div>
  );
};

export default WellnessPage;
