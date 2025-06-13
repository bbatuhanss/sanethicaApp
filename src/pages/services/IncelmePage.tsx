import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './detail.module.css';
import incelmeImg from '../../assets/images/body.png';

const IncelmePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.detailContainer}>
      <img src={incelmeImg} alt="Bölgesel İncelme" className={styles.image} />
      <h1>Bölgesel İncelme</h1>
      <p>
        Bazı bölgelerde biriken inatçı yağlar çoğu zaman diyet ve sporla giderilemez. Bu noktada cihaz destekli, medikal estetik çözümler büyük fark yaratır.
        <br /><br />
        <strong>Sanethica</strong>’nın bölgesel incelme uygulamaları:
        <br /><br />
        ✅ G5 masajı<br />
        ✅ Lenf drenaj<br />
        ✅ Emshape, ozon sauna<br />
        ✅ Smash gibi ileri teknoloji cihazlarla uygulanır.
        <br /><br />
        Bu işlemler sadece estetik değil, sağlık açısından da destekleyicidir. Lenf akışını hızlandırarak ödem atılmasına yardımcı olur ve kan dolaşımını iyileştirir.
      </p>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>← Geri</button>
    </div>
  );
};

export default IncelmePage;
