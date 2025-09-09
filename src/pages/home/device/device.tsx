import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./device.module.css";

const videos = [
  {
    src: "/video/biz.mp4",
    poster: "/video/thumbs/4.png",
    label: "Biz Kimiz ?",
    description: "Cihaz destekli uygulama; form ve sıkılaşmayı destekler.",
    bullets: ["30-45 dk seans", "Hedef: incelme", "Danışana özel planlama"],
  },
  {
    src: "/video/EmShape.mp4",
    poster: "/video/thumbs/5.png",
    label: "EmShape",
    description: "Kas aktivasyonunu artırarak sıkılaşma sağlayan teknoloji.",
    bullets: [
      "Kas tonusu artışı",
      "Düşük efor, yüksek etki",
      "Hedef bölgesel çalışma",
    ],
  },
  {
    src: "/video/G5 ve Smash.mp4",
    poster: "/video/thumbs/3.png",
    label: "G5 ve Smash",
    description: "Masaj ve mekanik titreşim ile bölgesel dolaşım desteği.",
    bullets: [
      "Kas gevşemesi",
      "Kan dolaşımı hızlanması",
      "Selülit görünümü azaltma",
    ],
  },
  {
    src: "/video/HAFTADA BELDEN 15 CM İNCELMEK MÜMKÜN.mp4",
    poster: "/video/thumbs/4.png",
    label: "15 cm İncelme Programı",
    description: "Düzenli seanslarla bel çevresinde gözle görülür incelme.",
    bullets: ["Hedef: bel çevresi", "Haftalık takip", "Yoğun uygulama"],
  },
  {
    src: "/video/Lenf Drenaj.mp4",
    poster: "/video/thumbs/3.png",
    label: "Lenf Drenaj",
    description: "Vücutta sıvı dolaşımını düzenleyen detoks destekli uygulama.",
    bullets: ["Ödem azaltma", "Bağışıklık desteği", "Dolaşımın hızlanması"],
  },
  {
    src: "/video/Ozon Sauna.mp4",
    poster: "/video/thumbs/6.png",
    label: "Ozon Sauna",
    description: "Ozon terapisi ile detoks ve metabolizma hızlandırma.",
    bullets: ["Toksin atımı", "Cilt sağlığı", "Rahatlama etkisi"],
  },
  {
    src: "/video/ön görüşme ve muayene.mp4",
    poster: "/video/thumbs/9.png",
    label: "Ön Görüşme & Muayene",
    description: "Danışan için kişisel analiz ve uygun program planlaması.",
    bullets: ["İlk tanışma", "Detaylı analiz", "Kişiye özel plan"],
  },
  {
    src: "/video/TANITIM.mp4",
    poster: "/video/thumbs/8.png",
    label: "Tanıtım",
    description: "Sanethica’yı ve sunduğumuz çözümleri tanıtan genel video.",
    bullets: [
      "Kurumsal bakış",
      "Hizmetler genel tanıtım",
      "Güven & profesyonellik",
    ],
  },
  {
    src: "/video/ZAYIFLAMADA ETKİLİ CİHAZLAR.mp4",
    poster: "/video/thumbs/1.png",
    label: "Zayıflamada Etkili Cihazlar",
    description: "Zayıflamayı destekleyen cihaz ve tekniklerin genel sunumu.",
    bullets: ["Yeni nesil cihazlar", "Hızlı sonuç", "Destekleyici uygulamalar"],
  },
];

const isMobile = () => window.matchMedia("(hover: none)").matches;

const Devices: React.FC = () => {
  const [active, setActive] = useState<(typeof videos)[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const hoverRefs = useRef<HTMLVideoElement[]>([]);

  const closeModal = () => {
    if (modalVideoRef.current) modalVideoRef.current.pause();
    if (activeIndex !== null) {
      const vid = hoverRefs.current[activeIndex];
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
        vid.load();
      }
    }
    setActive(null);
    setActiveIndex(null);
  };

  const handleCardClick = (i: number, v: (typeof videos)[0]) => {
    if (isMobile()) {
      const vid = hoverRefs.current[i];
      if (vid && (vid.paused || vid.currentTime === 0)) {
        vid.play().catch(() => {});
        return;
      }
    }
    setActive(v);
    setActiveIndex(i);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Uygulamalar ve Biz</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        speed={7000}
        allowTouchMove={false}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {videos.map((v, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={styles.card}
              onClick={() => handleCardClick(idx, v)}
            >
              <video
                ref={(el) => {
                  if (el) hoverRefs.current[idx] = el;
                }}
                className={styles.video}
                muted
                playsInline
                poster={v.poster}
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget;
                  vid.pause();
                  vid.currentTime = 0;
                  vid.load();
                }}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <div className={styles.label}>{v.label}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {active && (
        <div className={styles.backdrop} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{active.label}</h3>
              <button className={styles.close} onClick={closeModal}>
                ✕
              </button>
            </div>
            <video
              ref={modalVideoRef}
              className={styles.bigVideo}
              controls
              playsInline
            >
              <source src={active.src} type="video/mp4" />
            </video>
            <p className={styles.desc}>{active.description}</p>
            <ul className={styles.list}>
              {active.bullets?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Devices;
