import React, { useState } from "react";
import styles from "./reviews.module.css";

const reviews = [
  {
    author: "Batuhan Sevinç",
    date: "3 Haziran 2025",
    text: "Sanethica’yı gönül rahatlığıyla tavsiye ederim. Gerek ortamın huzurlu ve özenli olması, gerekse aldığım danışmanlık hizmeti beklentimin çok üzerindeydi. Kendimi çok iyi hissediyorum.",
    rating: 5,
    avatar: "B",
  },
  {
    author: "Cansu A",
    date: "25 Ağustos 2025",
    text: "Sanethica’ya çok teşekkür ederim! Deren hanım ve Ayyüce Hanımın güler yüzlü, samimi ve profesyonel yaklaşımları sayesinde her gelişimde çok motive oluyorum.",
    rating: 5,
    avatar: "C",
  },
  {
    author: "Hazal Çiftçi",
    date: "11 Ağustos 2025",
    text: "Yıllardır diyetisyen/klinik/sağlıklı yaşam danışmanlığı denemediğim yer kalmadı. Deren Hanım ve Ayyüce Hanım sayesinde 1 ayda 7 kilo verdim ve kendimi çok sağlıklı hissediyorum.",
    rating: 5,
    avatar: "H",
  },
  {
    author: "Yağmur Çinar",
    date: "12 Haziran 2025",
    text: "İstanbul’da Deren Hanım ve Ayyüce Hanım ile tanışmak benim için gerçekten büyük bir şanstı! Sağlıklı yaşam ve beslenme konusunda çok profesyoneller.",
    rating: 5,
    avatar: "Y",
  },
  {
    author: "Merve Sevinç",
    date: "18 Ağustos 2025",
    text: "Düğün hazırlığımda tanıştık, Ayyüce Hanım ve Deren Hanım sayesinde şahane bir gelin oldum. Balayı sonrası da devam, Sanethica’sız olmaz 💕",
    rating: 5,
    avatar: "M",
  },
  {
    author: "Zeynep Akyüz",
    date: "20 Temmuz 2025",
    text: "Bu kadar profesyonel, güleryüzlü ve donanımlı bir ekip çok nadir bulunur. İşlerini çok iyi yapıyorlar, cihazları da son derece güzel.",
    rating: 5,
    avatar: "Z",
  },
  {
    author: "Mahitap ŞENEL",
    date: "22 Temmuz 2025",
    text: "Tanıdığım en tatlı kızlarla zayıflıyorum, işlerinde çok uzmanlar, şahane motivasyon ❤️",
    rating: 5,
    avatar: "M",
  },
  {
    author: "İpek Yıldız",
    date: "5 Haziran 2025",
    text: "Samimi ve sıcak karşılamaları için çok teşekkür ederim. Hem sağlık sorunlarım hem de kilo kontrolü için çok faydalı oluyor.",
    rating: 5,
    avatar: "İ",
  },
  {
    author: "Ayça Eminağa",
    date: "21 Temmuz 2025",
    text: "Sanethica’yla tanıştığım için çok mutluyum. Ayyüce Hanım ve Deren Hanım sayesinde kısa sürede bambaşka bir fiziğe kavuştum. 10 yaş gençleştim diyebilirim.",
    rating: 5,
    avatar: "A",
  },
  {
    author: "Zeynep Pekmez",
    date: "28 Temmuz 2025",
    text: "Deren Hanım ve Ayyüce Hanım çok enerjik ve samimiler. Her hafta EMS hizmeti alıyorum, kesinlikle fark var.",
    rating: 5,
    avatar: "Z",
  },
  {
    author: "Feride Keskinler",
    date: "10 Haziran 2025",
    text: "Uzun süredir veremediğim kilolar ve besin intoleransım için Sanethica’ya başvurdum. Fonksiyonel beslenme planı ve cihaz desteğiyle çok memnun kaldım.",
    rating: 5,
    avatar: "F",
  },
  {
    author: "Özgür Çelik",
    date: "19 Ağustos 2025",
    text: "Gerçekten çok başarılı bir merkez. Sahipleri aşırı samimi ve ilgili. Çok güzel sonuçlar aldım. Tavsiye ederim.",
    rating: 5,
    avatar: "Ö",
  },
  {
    author: "Gül Mehtap Kaya",
    date: "8 Haziran 2025",
    text: "Sağlıklı, doyurucu ve eğlenceli beslenme reçeteleri, özenli takviyeler ve hızlı sonuç getiren cihazlarıyla harika bir yer.",
    rating: 5,
    avatar: "G",
  },
  {
    author: "Begüm Kurt",
    date: "27 Temmuz 2025",
    text: "İşlerinde çok profesyonel bir ekip. Ayyüce Hanım ve Deren Hanım harika ♥️ 1 ayda 8 kg yağ kaybı sağladık.",
    rating: 5,
    avatar: "B",
  },
  {
    author: "Alper Seyhan",
    date: "15 Ağustos 2025",
    text: "Kilo vermek istiyor, motivasyon ve teknolojik destek arıyorsanız doğru yerdesiniz.",
    rating: 5,
    avatar: "A",
  },
  {
    author: "Nurşen Gül",
    date: "30 Temmuz 2025",
    text: "Güvenerek kendimi teslim ettiğim ve sonuçlarından çok memnun kaldığım bir yerdi. Teşekkürler.",
    rating: 5,
    avatar: "N",
  },
  {
    author: "Nehir Önder",
    date: "4 Haziran 2025",
    text: "Aldığım danışmanlıktan çok memnun kaldım. Güleryüzlü hizmet ve etik yaklaşım için teşekkürler.",
    rating: 5,
    avatar: "N",
  },
  {
    author: "İrem Çağatay",
    date: "14 Haziran 2025",
    text: "Deren Hanım ve Ayyüce Hanım inanılmaz ilgili ve bilgili. Bölgesel incelme cihazlarıyla birlikte çok faydalı oldu.",
    rating: 5,
    avatar: "İ",
  },
  {
    author: "Meral Öncü",
    date: "2 Eylül 2025",
    text: "Güleryüz, tatlı dil ve hafifleme garantili ❤️",
    rating: 5,
    avatar: "M",
  },
  {
    author: "Aras Çelik",
    date: "9 Haziran 2025",
    text: "Deneyimli ve profesyonel bir ekip. Sağlıklı yaşam ve kilo verme konusunda çok yeterliler.",
    rating: 5,
    avatar: "A",
  },
  {
    author: "Özge Yıldırım",
    date: "25 Temmuz 2025",
    text: "Ayyüce Hanım ile iyi ki yollarımız kesişmiş. Deren Hanım ile beraber uyguladıkları program bedenime ve ruhuma çok iyi geldi.",
    rating: 5,
    avatar: "Ö",
  },
  {
    author: "Emirhan Karaaslan",
    date: "16 Temmuz 2025",
    text: "Çok samimi ve güzel bir ortam var. Danışanlarıyla fazlasıyla ilgililer.",
    rating: 5,
    avatar: "E",
  },
  {
    author: "Ayşegül Meriç",
    date: "13 Haziran 2025",
    text: "Güler yüzlü ve profesyonel ekip :)",
    rating: 5,
    avatar: "A",
  },
  {
    author: "Kardelen Gineli",
    date: "3 Eylül 2025",
    text: "İlk danışanlardan biri olarak çok memnun kaldım. Göbek kısmında yağlanmam fazlaydı, 5 seansta 8 kilo verdik.",
    rating: 5,
    avatar: "K",
  },
  {
    author: "Selin Gümen",
    date: "2 Eylül 2025",
    text: "O kadar keyifli bir deneyim ki. Ayyüce Hanım ve Deren Hanım çok profesyonel iki genç kadın. Çok mutlu oldum.",
    rating: 5,
    avatar: "S",
  },
  {
    author: "Funda Usta",
    date: "31 Ağustos 2025",
    text: "Ayyüce ve Deren hanımlar eşliğinde keyifli ve kolayca 2 ayda 7 kilo verdim. Çok teşekkürler!",
    rating: 5,
    avatar: "F",
  },
  {
    author: "Nesligül Kurtuluş",
    date: "28 Ağustos 2025",
    text: "Sadece kilo verme değil, sağlıklı yaşam alışkanlıkları kazandırmaya odaklanıyor. Ortam çok huzurlu.",
    rating: 5,
    avatar: "N",
  },
  {
    author: "Nurgulf",
    date: "27 Ağustos 2025",
    text: "Sanethica sadece bir marka değil, yüzlerce kişinin tercih ettiği bir başarı hikayesi 💯",
    rating: 5,
    avatar: "N",
  },
  {
    author: "Gülten Keskinler",
    date: "26 Ağustos 2025",
    text: "Çok samimi ve güler yüzlü karşılama. Profesyonel yaklaşımları çok iyi.",
    rating: 5,
    avatar: "G",
  },
  {
    author: "Gülsenem Yaşar",
    date: "24 Ağustos 2025",
    text: "Genç, deneyimli ve başarılı uygulamalarla inanılmaz sonuçlar sizi bekliyor. Enerjileri harika.",
    rating: 5,
    avatar: "G",
  },
  {
    author: "Sinem Yaşar",
    date: "23 Ağustos 2025",
    text: "Zayıflama yolculuğunda yanınızda olacak güler yüzlü ekip işte burada.",
    rating: 5,
    avatar: "S",
  },
  {
    author: "Ezgi Aksoy",
    date: "22 Ağustos 2025",
    text: "İyi ki tanışmışız 🌸🥰",
    rating: 5,
    avatar: "E",
  },
  {
    author: "Gülistan Gürkan",
    date: "20 Ağustos 2025",
    text: "Sağlıklı yaşam için danışmanlık alabileceğiniz en doğru yer 🤩",
    rating: 5,
    avatar: "G",
  },

  // Yeni eklenenler
  {
    author: "Leyla Yağdı",
    date: "Mart 2026",
    text: "Uzun zamandır kilo kontrolü, ödem ve genel yorgunluk şikayetlerim vardı. Sanethica ile tanıştıktan sonra beslenme düzenim tamamen değişti.",
    rating: 5,
    avatar: "L",
  },
  {
    author: "çiğdem usta",
    date: "Mart 2026",
    text: "Şehir hastanesinde çalışıyorum. Sanethica ile zayıflayan doktorlarımızı görünce o zaman tamam dedim.",
    rating: 5,
    avatar: "Ç",
  },
  {
    author: "cengiz uysal",
    date: "Mart 2026",
    text: "Çok uzun süredir kilo verme sürecindeydim. Sanethica’yı bulduktan sonra profesyonel yaklaşımlarına güvenerek başladım ve çok memnun kaldım.",
    rating: 5,
    avatar: "C",
  },
  {
    author: "Ramazan Yagdı",
    date: "Mart 2026",
    text: "Sanethica’ya başladığım gün kendim için verdiğim en doğru kararlardan biriymiş. Sadece birkaç seansta bile gözle görülür değişim yaşadım.",
    rating: 5,
    avatar: "R",
  },
  {
    author: "Tugce Sencan",
    date: "Ocak 2026",
    text: "Bir süredir hem beslenme danışmanlığı hem de zayıflama uygulamaları için geliyorum ve gerçekten çok memnun kaldım.",
    rating: 5,
    avatar: "T",
  },
  {
    author: "Zeynep Altintas",
    date: "Ocak 2026",
    text: "Sanethica’dan diyetisyenlik ve ozon hizmeti alıyorum, ara ara da lenf drenaj ve Emslim işlemlerini yaptırıyorum ve hepsinden çok memnunum.",
    rating: 5,
    avatar: "Z",
  },
  {
    author: "Irem Altintas",
    date: "Ocak 2026",
    text: "Sanethica’dan uzun süredir hizmet alıyorum ve gerçekten çok memnunum. Özellikle lenf drenaj ve Emslim işlemlerini düzenli yaptırıyorum.",
    rating: 5,
    avatar: "I",
  },
  {
    author: "Seda Kartal",
    date: "Ocak 2026",
    text: "Çıkın çıkın gelin, keyiflenin, dinlenin, zayıflayın. Size değer veren bir ekiple çok güzel bir deneyim yaşıyorsunuz.",
    rating: 5,
    avatar: "S",
  },
  {
    author: "Akın Sulak",
    date: "Şubat 2026",
    text: "Günün sonunda Sanethica’ya geldiğimde çok rahatlamış ve enerjik hissediyorum. Haftalık rutinlerimin vazgeçilmezi oldu.",
    rating: 5,
    avatar: "A",
  },
  {
    author: "tuğba doruk",
    date: "Kasım 2025",
    text: "İlgi süper, hijyen süper, sonuç çok iyi. Tesadüfen karşıma çıktılar ve iyi ki de çıkmışlar.",
    rating: 5,
    avatar: "T",
  },
  {
    author: "Nazende Gortay",
    date: "Ocak 2026",
    text: "Bu kadar hızlı ve güzel sonuçlar elde edeceğimi hiç tahmin etmiyordum. Güler yüzlü, sıcakkanlı ekipleriyle kendimi çok güvende hissettim.",
    rating: 5,
    avatar: "N",
  },
  {
    author: "Şebnem Tuna",
    date: "Ocak 2026",
    text: "Bir yıl önce yorgun, şişman ve karamsardım. Sanethica ile tanışınca önce beslenme alışkanlıklarım sonra kilom ve hayata bakışım değişti.",
    rating: 5,
    avatar: "Ş",
  },
  {
    author: "Duygu Bülbül",
    date: "Kasım 2025",
    text: "Sanethica’yı arkadaşım önerdi. Gerçekten söylediği kadar varmış. Hem ekip çok profesyonel hem de çok samimi bir ortamı var.",
    rating: 5,
    avatar: "D",
  },
  {
    author: "İlbey Yaşar",
    date: "Ekim 2025",
    text: "Sadece 1 ayda yeni bir ben oldum. Profesyonel yaklaşımları sayesinde tüm kan değerlerim düzeldi ve daha rahat nefes alıyorum.",
    rating: 5,
    avatar: "İ",
  },
  {
    author: "Emine Alper",
    date: "Ekim 2025",
    text: "Kendinizi Ayyüce Hanım ve Deren Hanım’a emanet edin ve gerisini düşünmeyin.",
    rating: 5,
    avatar: "E",
  },
  {
    author: "Güleser Yaşar",
    date: "Ekim 2025",
    text: "Harika sonuçlar aldım, herkese tavsiye ediyorum. İki başarılı uzman diyetisyenin sunduğu yolculuğa mutlaka katılın.",
    rating: 5,
    avatar: "G",
  },
  {
    author: "Gizem Bilge",
    date: "Ekim 2025",
    text: "Ayyüce Hanım ve Deren Hanım çok ilgililer. İhtiyacım olduğunda direkt tercih ediyorum ve etkili çözümlerle mutlu ayrılıyorum.",
    rating: 5,
    avatar: "G",
  },
  {
    author: "Yaren Gineli",
    date: "Aralık 2025",
    text: "İçeri girer girmez huzur veren bir ortam. Kendim için yaptığım en güzel iyilik.",
    rating: 5,
    avatar: "Y",
  },
  {
    author: "Burcu Aktaş",
    date: "Ekim 2025",
    text: "Canım Sanethica ailem. Çok güzel zayıfladım, inceldim. Sağlıkla zayıflayıp yağ yakımı istiyorsanız en doğru adres.",
    rating: 5,
    avatar: "B",
  },
  {
    author: "yasin güzel",
    date: "Mart 2026",
    text: "Hem kilo verdim hem de beslenme alışkanlığım değişti. Sanethica gerçekten fark yaratıyor.",
    rating: 5,
    avatar: "Y",
  },
  {
    author: "Ayyüş Sevinç",
    date: "Mart 2026",
    text: "Öncelikle çok hijyenik ve tertemiz bir merkez. Zorlanmadan sağlıklı şekilde kilo verdim, çok memnunum.",
    rating: 5,
    avatar: "A",
  },
  {
    author: "ömürcan akpınar",
    date: "Mart 2026",
    text: "Uzun zamandır kilo vermeye çalışıyordum ama özellikle bel çevremdeki yağlanma spora rağmen gitmiyordu. Sanethica ile tanıştıktan sonra çok memnun kaldım.",
    rating: 5,
    avatar: "Ö",
  },
];

const colors = [
  "#4CAF50", // yeşil
  "#FF9800", // turuncu
  "#2196F3", // mavi
  "#9C27B0", // mor
  "#E91E63", // pembe
  "#795548", // kahverengi
  "#009688", // teal
  "#FF5722", // kırmızımsı
];

function getColorForName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colors.length);
  return colors[index];
}
const ReviewList: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleExpand = (i: number) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 600);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Google Yorumları</h2>
      <div className={styles.grid}>
        {reviews.slice(0, visibleCount).map((r, i) => {
          const isExpanded = expandedIndex === i;
          const shortText =
            r.text.length > 150 ? r.text.slice(0, 150) + "..." : r.text;

          return (
            <div key={i} className={styles.card}>
              <div className={styles.header}>
                <div
                  className={styles.avatar}
                  style={{ backgroundColor: getColorForName(r.author) }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className={styles.author}>{r.author}</div>
                  <div className={styles.date}>{r.date}</div>
                </div>
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
                  alt="Google"
                  className={styles.googleIcon}
                />
              </div>
              <p
                className={`${styles.text} ${isExpanded ? styles.expanded : ""}`}
              >
                {isExpanded ? r.text : shortText}
              </p>
              {r.text.length > 150 && (
                <span
                  className={styles.readMore}
                  onClick={() => toggleExpand(i)}
                >
                  {isExpanded ? "Daha az göster" : "Daha fazla oku"}
                </span>
              )}
              <div className={styles.stars}>
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </div>
            </div>
          );
        })}
      </div>

      {visibleCount < reviews.length && (
        <button className={styles.moreBtn} onClick={handleShowMore}>
          Daha fazla göster
        </button>
      )}
    </section>
  );
};

export default ReviewList;
