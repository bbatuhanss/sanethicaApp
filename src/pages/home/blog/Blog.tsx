import React from 'react';
import styles from './blog.module.css';
import blog1 from '../../../assets/images/one.png';
import blog2 from '../../../assets/images/two.png';
import blog3 from '../../../assets/images/three1.png';
import blog4 from '../../../assets/images/four.png';
import blog5 from '../../../assets/images/five.png';
import blog6 from '../../../assets/images/six.png';
import blog7 from '../../../assets/images/seven.png';
import blog8 from '../../../assets/images/eigth.png';
import blog9 from '../../../assets/images/nine.png';
import { Link } from 'react-router-dom';


const articles = [
  {
    title: 'Glutensiz Beslenme Rehberi',
    description: 'Glutensiz yaşam tarzına geçerken dikkat edilmesi gerekenler ve alternatif içerikler.',
    image: blog1,
    slug: 'glutensiz-beslenme-rehberi',
  },
  {
    title: 'Bölgesel İncelme Nedir?',
    description: 'Smash, lenf drenaj, G5 ve diğer incelme yöntemleri hakkında merak edilenler.',
    image: blog2,
    slug: 'bolgesel-incelme-nedir',
  },
  {
    title: 'Aralıklı Oruç: Faydaları ve Dikkat Edilmesi Gerekenler',
    description: 'Intermittent fasting (IF) beslenme modelinin vücuda etkileri ve doğru uygulama yolları.',
    image: blog3,
    slug: 'aralikli-oruc-nedir',
  },
  {
    title: 'Bağışıklık Sistemi İçin Beslenme Tüyoları',
    description: 'Hastalıklara karşı koruyucu gücü artıran vitamin, mineral ve besinler üzerine öneriler.',
    image: blog4,
    slug: 'bagisiklik-icin-beslenme',
  },
  {
    title: 'Duygusal Yeme ve Stresle Baş Etme Yolları',
    description: 'Stres anında kontrolsüz yeme isteğinin nedenleri ve bu döngüden çıkmak için ipuçları.',
    image: blog5,
    slug: 'duygusal-yeme-ve-stres',
  },
  {
    title: 'Vejetaryen Beslenmede Protein Kaynakları',
    description: 'Et tüketmeyenler için yeterli protein alımını sağlayacak bitkisel besin alternatifleri.',
    image: blog6,
    slug: 'vejetaryen-protein-kaynaklari',
  },
  {
    title: 'Metabolizmayı Hızlandırmanın Doğal Yolları',
    description: 'Su tüketimi, hareket ve doğru besin seçimleriyle metabolizmayı nasıl destekleyebilirsiniz?',
    image: blog7,
    slug: 'metabolizma-hizlandirma-yollari',
  },
  {
    title: 'Detoks Diyetleri Gerçekten İşe Yarıyor mu?',
    description: 'Popüler detoks diyetlerinin vücut üzerindeki etkileri ve bilimsel dayanakları üzerine detaylı bir inceleme.',
    image: blog8,
    slug: 'detoks-diyetleri-ise-yariyor-mu',
  },
  {
    title: 'Su Tüketiminin Zayıflama Üzerindeki Rolü',
    description: 'Günlük yeterli su tüketimi ile kilo kontrolü arasındaki ilişki ve su içmenin metabolizma üzerindeki etkisi.',
    image: blog9,
    slug: 'su-tuketimi-ve-zayiflama',
  },
];


const Blog = () => {
  return (
    <section className={styles.blog} id="blog">
      <h2 className={styles.heading}>Sanethica Blog</h2>
      <div className={styles.grid}>
        {articles.map((article, i) => (
          <div className={styles.card} key={i} data-aos="fade-up" data-aos-delay={i * 50}>
            <img src={article.image} alt={article.title} className={styles.image} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <Link to={`/blog/${article.slug}`} className={styles.link}>Devamını Oku</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
