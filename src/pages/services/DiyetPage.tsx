import React from 'react';
import { useNavigate } from 'react-router-dom';
import dietImg from '../../assets/images/diet.png';
import styles from './detail.module.css';

const DiyetPage = () => {
    const navigate = useNavigate();
  
    return (
      <div className={styles.detailContainer}>
        <img src={dietImg} alt="Diyet" className={styles.image} />
        <h1>Bireysel Diyet Desteği</h1>
        <p>
          Modern yaşamın getirdiği yoğun tempo ve stres, beslenme alışkanlıklarımızı da olumsuz etkiliyor. Hızlı tüketilen öğünler, yetersiz su tüketimi, yanlış diyetler ve hareketsizlik, uzun vadede ciddi sağlık sorunlarına yol açabiliyor.
          <br /><br />
          <strong>Sanethica</strong> olarak bu noktada devreye giriyoruz. Kişiye özel olarak hazırlanan beslenme programlarımız, yalnızca kilo vermeyi değil; sağlıklı, sürdürülebilir ve dengeli bir yaşam tarzı oluşturmayı hedefliyor.
          <br /><br />
          🔹 Detaylı vücut analizi<br />
          🔹 Hedefe uygun beslenme planı<br />
          🔹 Haftalık takip ve revizyon<br />
          🔹 Duygusal yeme bozukluklarına özel danışmanlık
          <br /><br />
          Her birey farklıdır, dolayısıyla tek tip diyet işe yaramaz. Sanethica’da hedefinize sağlıklı adımlarla ulaşmanız için buradayız.
        </p>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>← Geri</button>
      </div>
    );
  };
  
  export default DiyetPage;