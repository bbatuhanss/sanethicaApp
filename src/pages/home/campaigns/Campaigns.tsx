import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./campaigns.module.css";
import skinCarePoster from "../../../assets/images/campaigns/campaign-skin-care.png";
import ozoneLymphPoster from "../../../assets/images/campaigns/campaign-ozone-lymph.png";

type FeatureIconType = "analysis" | "leaf" | "gift" | "drop" | "circulation";

interface CampaignFeature {
  label: string;
  icon: FeatureIconType;
}

interface CampaignItem {
  number: string;
  src: string;
  poster: string;
  label: string;
  oldPrice: string;
  price: string;
  discount: string;
  description: string;
  features: CampaignFeature[];
}
const AnimatedGiftBow: React.FC = () => {
  const uniqueId = useId().replace(/[^a-zA-Z0-9_-]/g, "");

  const loopGradient = `${uniqueId}-loop`;
  const tailGradient = `${uniqueId}-tail`;
  const knotGradient = `${uniqueId}-knot`;
  const goldGradient = `${uniqueId}-gold`;
  const shadowFilter = `${uniqueId}-shadow`;
  const leftTailClip = `${uniqueId}-left-tail-clip`;
  const rightTailClip = `${uniqueId}-right-tail-clip`;

  const leftTailPath = `
    M85 72
    C83 110 76 153 62 202
    L80 186
    L92 207
    C96 158 96 112 97 73
    Z
  `;

  const rightTailPath = `
    M95 72
    C99 110 107 153 121 202
    L103 186
    L90 207
    C86 158 87 112 83 73
    Z
  `;

  return (
    <div className={styles.giftBow} aria-hidden="true">
      <svg
        className={styles.giftBowSvg}
        viewBox="0 0 180 210"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Bordo saten halka */}
          <linearGradient
            id={loopGradient}
            x1="18"
            y1="18"
            x2="150"
            y2="96"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#8f0716" />
            <stop offset="0.2" stopColor="#dc3040" />
            <stop offset="0.42" stopColor="#9d0b1b" />
            <stop offset="0.68" stopColor="#e24652" />
            <stop offset="1" stopColor="#5d030d" />
          </linearGradient>

          {/* Kuyruk saten dokusu */}
          <linearGradient
            id={tailGradient}
            x1="72"
            y1="65"
            x2="104"
            y2="205"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d82b39" />
            <stop offset="0.25" stopColor="#8d0715" />
            <stop offset="0.48" stopColor="#c81c2c" />
            <stop offset="0.72" stopColor="#72040f" />
            <stop offset="1" stopColor="#a50c1b" />
          </linearGradient>

          {/* Düğüm */}
          <radialGradient
            id={knotGradient}
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(78 55) rotate(42) scale(46)"
          >
            <stop offset="0" stopColor="#ef5962" />
            <stop offset="0.36" stopColor="#b41222" />
            <stop offset="0.72" stopColor="#790612" />
            <stop offset="1" stopColor="#4d0209" />
          </radialGradient>

          {/* Altın varak */}
          <linearGradient id={goldGradient} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff2a8" />
            <stop offset="0.18" stopColor="#d9a63c" />
            <stop offset="0.38" stopColor="#8a5710" />
            <stop offset="0.57" stopColor="#f4d77d" />
            <stop offset="0.78" stopColor="#ad741d" />
            <stop offset="1" stopColor="#fff0a0" />
          </linearGradient>

          <clipPath id={leftTailClip}>
            <path d={leftTailPath} />
          </clipPath>

          <clipPath id={rightTailClip}>
            <path d={rightTailPath} />
          </clipPath>

          <filter
            id={shadowFilter}
            x="-45%"
            y="-35%"
            width="190%"
            height="205%"
          >
            <feDropShadow
              dx="0"
              dy="8"
              stdDeviation="6"
              floodColor="#350106"
              floodOpacity="0.38"
            />

            <feDropShadow
              dx="0"
              dy="1"
              stdDeviation="1"
              floodColor="#f4d77d"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        <g filter={`url(#${shadowFilter})`}>
          {/* SOL KUYRUK */}
          <g className={styles.giftBowTailLeft}>
            <path
              d={leftTailPath}
              fill={`url(#${tailGradient})`}
              stroke={`url(#${goldGradient})`}
              strokeWidth="2.4"
            />

            {/* Altın varaklı uç */}
            <g clipPath={`url(#${leftTailClip})`}>
              <path
                className={styles.giftBowFoilTip}
                d="M45 166 L105 150 L108 220 L43 220 Z"
                fill={`url(#${goldGradient})`}
              />

              <path
                className={styles.giftBowFoilShine}
                d="M48 174 L103 159"
                fill="none"
                stroke="#fff6c4"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.72"
              />
            </g>

            {/* Saten parlaklığı */}
            <path
              d="M82 82 C80 116 74 146 68 166"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.16"
            />
          </g>

          {/* SAĞ KUYRUK */}
          <g className={styles.giftBowTailRight}>
            <path
              d={rightTailPath}
              fill={`url(#${tailGradient})`}
              stroke={`url(#${goldGradient})`}
              strokeWidth="2.4"
            />

            {/* Altın varaklı uç */}
            <g clipPath={`url(#${rightTailClip})`}>
              <path
                className={styles.giftBowFoilTip}
                d="M75 150 L136 166 L139 220 L72 220 Z"
                fill={`url(#${goldGradient})`}
              />

              <path
                className={styles.giftBowFoilShine}
                d="M78 159 L134 174"
                fill="none"
                stroke="#fff6c4"
                strokeWidth="2.2"
                strokeLinecap="round"
                opacity="0.72"
              />
            </g>

            <path
              d="M98 82 C101 116 107 146 114 166"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.13"
            />
          </g>

          {/* SOL HALKA */}
          <path
            className={styles.giftBowLoopLeft}
            d="
              M89 69
              C72 26 31 12 13 39
              C-3 66 25 96 82 77
              C93 73 97 68 89 69
              Z
            "
            fill={`url(#${loopGradient})`}
            stroke={`url(#${goldGradient})`}
            strokeWidth="2.7"
          />

          {/* SAĞ HALKA */}
          <path
            className={styles.giftBowLoopRight}
            d="
              M91 69
              C108 26 149 12 167 39
              C183 66 155 96 98 77
              C87 73 83 68 91 69
              Z
            "
            fill={`url(#${loopGradient})`}
            stroke={`url(#${goldGradient})`}
            strokeWidth="2.7"
          />

          {/* Halka iç gölgeleri */}
          <path
            d="M80 67 C61 43 36 35 21 48 C42 43 63 53 83 75 Z"
            fill="#3d0107"
            opacity="0.38"
          />

          <path
            d="M100 67 C119 43 144 35 159 48 C138 43 117 53 97 75 Z"
            fill="#3d0107"
            opacity="0.38"
          />

          {/* Altın kenar parlamaları */}
          <path
            d="M18 42 C34 20 65 29 84 58"
            fill="none"
            stroke={`url(#${goldGradient})`}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />

          <path
            d="M162 42 C146 20 115 29 96 58"
            fill="none"
            stroke={`url(#${goldGradient})`}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Saten üst parlamaları */}
          <path
            d="M22 38 C43 24 67 37 82 58"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.24"
          />

          <path
            d="M158 38 C137 24 113 37 98 58"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.2"
          />

          {/* ORTA DÜĞÜM */}
          <rect
            x="69"
            y="50"
            width="42"
            height="38"
            rx="12"
            fill={`url(#${knotGradient})`}
            stroke={`url(#${goldGradient})`}
            strokeWidth="3"
            transform="rotate(3 90 69)"
          />

          {/* Düğüm üzerindeki altın şerit */}
          <path
            d="M88 51 C90 62 91 76 89 87"
            fill="none"
            stroke={`url(#${goldGradient})`}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.8"
          />

          <path
            d="M75 57 C84 50 99 53 105 61"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.25"
          />
        </g>
      </svg>
    </div>
  );
};
const campaigns: CampaignItem[] = [
  {
    number: "01",
    src: "/video/bakim_indirim.mp4",
    poster: skinCarePoster,
    label: "Medikal Cilt Bakımı",
    oldPrice: "4.000 TL",
    price: "2.499 TL",
    discount: "%38 İndirim",
    description:
      "Hydrafacial Sunshine With Camera cihazı ile kameralı cilt analizi ve profesyonel bakım sürecini kampanyalı fiyatla deneyimleyin.",
    features: [
      {
        label: "Kameralı cilt analizi",
        icon: "analysis",
      },
      {
        label: "Kişiye özel bakım protokolü",
        icon: "leaf",
      },
      {
        label: "Sınırlı süreli kampanya",
        icon: "gift",
      },
    ],
  },
  {
    number: "02",
    src: "/video/lenf_indirim.mp4",
    poster: ozoneLymphPoster,
    label: "Ozon Sauna + Lenf Drenaj",
    oldPrice: "3.000 TL",
    price: "1.499 TL",
    discount: "%50 İndirim",
    description:
      "Ödem görünümüne destek, hafiflik hissi ve konforlu bakım deneyimi sunan ikili uygulamayı kampanyalı avantajlarla keşfedin.",
    features: [
      {
        label: "Ödem görünümüne destek",
        icon: "drop",
      },
      {
        label: "Hafiflik ve rahatlama hissi",
        icon: "circulation",
      },
      {
        label: "Sınırlı süreli kampanya",
        icon: "gift",
      },
    ],
  },
];
const particleClasses = [
  styles.p1,
  styles.p2,
  styles.p3,
  styles.p4,
  styles.p5,
  styles.p6,
  styles.p7,
  styles.p8,
  styles.p9,
  styles.p10,
  styles.p11,
  styles.p12,
];

interface FeatureIconProps {
  type: FeatureIconType;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ type }) => {
  const commonProps = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "analysis") {
    return (
      <svg {...commonProps}>
        <circle cx="10" cy="10" r="5.5" />
        <path d="m14.2 14.2 5 5" />
        <path d="M10 7.6v4.8" />
        <path d="M7.6 10h4.8" />
      </svg>
    );
  }

  if (type === "leaf") {
    return (
      <svg {...commonProps}>
        <path d="M20.5 3.5C13 3.8 6.1 6.5 4.3 12.2c-1.2 3.8 1.3 6.8 4.7 6.3 5.8-.9 9.6-7.6 11.5-15Z" />
        <path d="M4.8 20c2.8-5.8 6.9-9.5 12.1-12.1" />
      </svg>
    );
  }

  if (type === "gift") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="9" width="18" height="12" rx="1.5" />
        <path d="M12 9v12" />
        <path d="M3 13h18" />
        <path d="M12 9H7.8a2.3 2.3 0 1 1 2-3.5L12 9Z" />
        <path d="M12 9h4.2a2.3 2.3 0 1 0-2-3.5L12 9Z" />
      </svg>
    );
  }

  if (type === "drop") {
    return (
      <svg {...commonProps}>
        <path d="M12 2.8S5.8 10 5.8 14.5a6.2 6.2 0 0 0 12.4 0C18.2 10 12 2.8 12 2.8Z" />
        <path d="M9 15.2c.4 1.6 1.5 2.4 3 2.6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M20 7h-5V2" />
      <path d="M4 17h5v5" />
      <path d="M18.2 5.8A8 8 0 0 0 5.4 7.3" />
      <path d="M5.8 18.2a8 8 0 0 0 12.8-1.5" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  );
};

const ParticleField: React.FC = () => {
  return (
    <div className={styles.particleField} aria-hidden="true">
      {particleClasses.map((particleClass, index) => (
        <span key={index} className={`${styles.particle} ${particleClass}`} />
      ))}
    </div>
  );
};

const BackgroundDecorations: React.FC = () => {
  return (
    <div className={styles.decorations} aria-hidden="true">
      <span className={`${styles.streamer} ${styles.streamerLeft}`} />
      <span className={`${styles.streamer} ${styles.streamerRight}`} />

      <span className={`${styles.confetti} ${styles.confettiOne}`} />
      <span className={`${styles.confetti} ${styles.confettiTwo}`} />
      <span className={`${styles.confetti} ${styles.confettiThree}`} />
      <span className={`${styles.confetti} ${styles.confettiFour}`} />
      <span className={`${styles.confetti} ${styles.confettiFive}`} />
      <span className={`${styles.confetti} ${styles.confettiSix}`} />
      <span className={`${styles.confetti} ${styles.confettiSeven}`} />
      <span className={`${styles.confetti} ${styles.confettiEight}`} />

      <span className={`${styles.sparkle} ${styles.sparkleOne}`}>✦</span>
      <span className={`${styles.sparkle} ${styles.sparkleTwo}`}>✦</span>
      <span className={`${styles.sparkle} ${styles.sparkleThree}`}>✦</span>
      <span className={`${styles.sparkle} ${styles.sparkleFour}`}>✦</span>
    </div>
  );
};

const Campaigns: React.FC = () => {
  const [active, setActive] = useState<CampaignItem | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const openModal = useCallback((campaign: CampaignItem) => {
    setActive(campaign);
  }, []);

  const closeModal = useCallback(() => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }

    setActive(null);
  }, []);

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [active, closeModal]);

  return (
    <section className={styles.section}>
      <div className={styles.bgMesh} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgNoise} aria-hidden="true" />

      <span className={`${styles.orb} ${styles.orbGoldOne}`} />
      <span className={`${styles.orb} ${styles.orbGreen}`} />
      <span className={`${styles.orb} ${styles.orbGoldTwo}`} />

      <ParticleField />
      <BackgroundDecorations />

      <header className={styles.header}>
        <div className={styles.tagWrapper}>
          <span className={styles.tagLine} />

          <span className={styles.tag}>Sınırlı Süreli Fırsatlar</span>

          <span className={`${styles.tagLine} ${styles.tagLineRight}`} />
        </div>

        <h2 className={styles.title}>
          Bu ayın <em className={styles.titleEm}>kampanyaları</em>
        </h2>

        <p className={styles.subtitle}>
          Seçili uygulamalarda avantajlı fiyatlarla tanışın, kampanya
          videolarını izleyin ve yerinizi şimdiden ayırtın.
        </p>

        <div className={styles.headerDivider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerDot} />
          <span className={styles.dividerLine} />
        </div>
      </header>

      <div className={styles.showcase}>
        {campaigns.map((campaign, index) => {
          const isReverse = index % 2 === 1;

          return (
            <article
              key={campaign.number}
              className={`${styles.campaignRow} ${
                isReverse ? styles.reverse : ""
              }`}
            >
              <div className={styles.mediaShell}>
                <button
                  type="button"
                  className={styles.mediaPanel}
                  onClick={() => openModal(campaign)}
                  aria-label={`${campaign.label} kampanya videosunu izle`}
                >
                  <img
                    src={campaign.poster}
                    alt={`${campaign.label} kampanya görseli`}
                    className={styles.poster}
                    loading="lazy"
                  />

                  <span className={styles.mediaHoverShade} />
                </button>

                <AnimatedGiftBow />
              </div>

              <div className={styles.contentPanel}>
                <span className={styles.campaignNumber}>{campaign.number}</span>

                <div className={styles.contentInner}>
                  <span className={styles.eyebrow}>
                    Sınırlı Süreli Kampanya
                  </span>

                  <h3 className={styles.campaignTitle}>{campaign.label}</h3>

                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>{campaign.oldPrice}</span>

                    <span className={styles.newPrice}>{campaign.price}</span>

                    <span className={styles.discountBadge}>
                      {campaign.discount}
                    </span>
                  </div>

                  <p className={styles.description}>{campaign.description}</p>

                  <div className={styles.features}>
                    {campaign.features.map((feature) => (
                      <div key={feature.label} className={styles.feature}>
                        <span className={styles.featureIcon}>
                          <FeatureIcon type={feature.icon} />
                        </span>

                        <span className={styles.featureLabel}>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={styles.videoButton}
                      onClick={() => openModal(campaign)}
                    >
                      <span className={styles.buttonPlay}>
                        <svg
                          width="8"
                          height="10"
                          viewBox="0 0 8 10"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M1 0.75C1 0.16 1.65-.17 2.12.17l5 3.25a1 1 0 0 1 0 1.66l-5 3.25C1.65 8.67 1 8.34 1 7.75V.75Z" />
                        </svg>
                      </span>
                      Videoyu İzle
                    </button>

                    <a href="/contact" className={styles.primaryButton}>
                      <span className={styles.primaryButtonText}>
                        Kampanyadan Yararlan
                      </span>

                      <span className={styles.primaryButtonArrow}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {active && (
        <div
          className={styles.backdrop}
          onClick={closeModal}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="campaign-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Kampanya penceresini kapat"
            >
              ✕
            </button>

            <span className={styles.modalTag}>Video Kampanya</span>

            <h3 id="campaign-modal-title" className={styles.modalTitle}>
              {active.label}
            </h3>

            <div className={styles.modalPriceRow}>
              <div className={styles.modalPriceGroup}>
                <span className={styles.modalOldPrice}>{active.oldPrice}</span>

                <span className={styles.modalNewPrice}>{active.price}</span>
              </div>

              <span className={styles.modalDiscount}>{active.discount}</span>
            </div>

            <div className={styles.videoWrapper}>
              <video
                key={active.src}
                ref={modalVideoRef}
                className={styles.bigVideo}
                controls
                autoPlay
                playsInline
                poster={active.poster}
              >
                <source src={active.src} type="video/mp4" />
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            </div>

            <p className={styles.modalDescription}>{active.description}</p>

            <div className={styles.modalFeatures}>
              {active.features.map((feature) => (
                <div key={feature.label} className={styles.modalFeature}>
                  <span className={styles.modalFeatureIcon}>
                    <FeatureIcon type={feature.icon} />
                  </span>

                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            <a href="/contact" className={styles.modalCta}>
              {active.price} · Kampanyadan Yararlan
              <span>→</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Campaigns;
