import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore: side-effect import has no type declarations in this project
import "swiper/css";
import styles from "./device.module.css";

interface VideoItem {
  src: string;
  poster: string;
  label: string;
  tag: string;
  description: string;
  bullets: string[];
}

const videos: VideoItem[] = [
  {
    src: "/video/lazer.mp4",
    poster: "/video/thumbs/7.jpg",
    label: "Lazer Epilasyon",
    tag: "Lazer",
    description:
      "Alby Pro Diode Laser teknolojisiyle konforlu ve kişiye özel lazer epilasyon deneyimi.",
    bullets: [
      "-21°C başlık soğutması",
      "Yapay zeka destekli analiz",
      "FDA onaylı cihaz",
    ],
  },
  {
    src: "/video/bakim.mp4",
    poster: "/video/thumbs/8.jpg",
    label: "Cilt Bakımı",
    tag: "Cilt Bakımı",
    description:
      "Hydrafacial Sunshine With Camera cihazı ile kameralı cilt analizi ve profesyonel bakım süreci.",
    bullets: ["Kameralı cilt analizi", "Hydradermabrazyon", "RF Eye & RF Face"],
  },
  {
    src: "/video/g5.mp4",
    poster: "/video/thumbs/4.jpg",
    label: "G5 Masajı",
    tag: "Cihaz",
    description:
      "Titreşim destekli masaj etkisiyle hedef bölgede sıkılaşma ve selülit görünümüne destek.",
    bullets: [
      "Bölgesel dolaşım desteği",
      "Selülit görünümüne destek",
      "Sıkılaşma hissi",
    ],
  },
  {
    src: "/video/ZAYIFLAMADA ETKİLİ CİHAZLAR.mp4",
    poster: "/video/thumbs/1.jpg",
    label: "Etkili Cihazlar",
    tag: "Cihaz",
    description: "Bölgesel incelmeyi destekleyen cihaz ve tekniklerin sunumu.",
    bullets: [
      "Yeni nesil cihazlar",
      "Düzenli seans desteği",
      "Destekleyici uygulamalar",
    ],
  },

  {
    src: "/video/Lenf Drenaj.mp4",
    poster: "/video/thumbs/3.jpg",
    label: "Lenf Drenaj",
    tag: "Cihaz",
    description: "Vücutta sıvı dolaşımını düzenleyen detoks destekli uygulama.",
    bullets: ["Ödem azaltma", "Rahatlama desteği", "Dolaşımın hızlanması"],
  },
  {
    src: "/video/EmShape.mp4",
    poster: "/video/thumbs/5.jpg",
    label: "EmShape",
    tag: "Cihaz",
    description: "Kas aktivasyonunu artırarak sıkılaşma sağlayan teknoloji.",
    bullets: [
      "Kas tonusu artışı",
      "Düşük efor, yüksek etki",
      "Hedef bölgesel çalışma",
    ],
  },
  {
    src: "/video/G5 ve Smash.mp4",
    poster: "/video/thumbs/2.jpg",
    label: "G5 ve Smash",
    tag: "Cihaz",
    description: "Masaj ve mekanik titreşim ile bölgesel dolaşım desteği.",
    bullets: [
      "Kas gevşemesi",
      "Kan dolaşımı hızlanması",
      "Selülit görünümü azaltma",
    ],
  },
  {
    src: "/video/Ozon Sauna.mp4",
    poster: "/video/thumbs/6.jpg",
    label: "Ozon Sauna",
    tag: "Wellness",
    description: "Ozon terapisi ile detoks ve metabolizma hızlandırma.",
    bullets: ["Toksin atımı", "Cilt sağlığı", "Rahatlama etkisi"],
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
      <div className={styles.header}>
        <span className={styles.tag}>Uygulamalar</span>
        <h2 className={styles.title}>
          Teknoloji ile <em>desteklenen</em> sonuçlar
        </h2>
        <p className={styles.subtitle}>
          Sanethica’da uygulanan cihazları, süreçleri ve müşteri deneyimini kısa
          videolarla keşfedin.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3500}
        allowTouchMove={true}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1.3, spaceBetween: 14 },
          640: { slidesPerView: 2.2, spaceBetween: 16 },
          1024: { slidesPerView: 3.3, spaceBetween: 20 },
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
              <div className={styles.cardOverlay} />
              <div className={styles.cardBottom}>
                <span className={styles.cardTag}>{v.tag}</span>
                <span className={styles.cardLabel}>{v.label}</span>
                <span className={styles.cardPlay}>▶ İzle</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {active && (
        <div className={styles.backdrop} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              ✕
            </button>
            <div className={styles.modalTag}>{active.tag}</div>
            <h3 className={styles.modalTitle}>{active.label}</h3>
            <video
              ref={modalVideoRef}
              className={styles.bigVideo}
              controls
              autoPlay
              playsInline
            >
              <source src={active.src} type="video/mp4" />
            </video>
            <p className={styles.modalDesc}>{active.description}</p>
            <div className={styles.modalBullets}>
              {active.bullets.map((b, i) => (
                <div key={i} className={styles.bullet}>
                  <span className={styles.bulletDot} />
                  {b}
                </div>
              ))}
            </div>
            <a href="/contact" className={styles.modalCta}>
              Randevu Al →
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Devices;
