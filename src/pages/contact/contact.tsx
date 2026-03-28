import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import Footer from "components/footer/footer";
import Reviews from "components/reviews/reviews";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const info = [
    { label: "Firma Adı", value: "Sanethica" },
    {
      label: "Firma Resmi Adı",
      value:
        "Sanethica Sağlıklı Yaşam Beslenme ve Diyet Danışmanlığı Limited Şirketi",
    },
    {
      label: "Telefon",
      value: <a href="tel:+905384100034">+90 538 410 00 34</a>,
    },
    {
      label: "E-mail",
      value: <a href="mailto:info@sanethica.com">info@sanethica.com</a>,
    },
    { label: "Adres", value: "Metropol A Blok D:38 Ataşehir / İstanbul" },
    { label: "Ülke", value: "Türkiye" },
    { label: "Şehir", value: "İstanbul" },
    { label: "Semt", value: "Ataşehir" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_8oh0i8d",
        "template_kopq9ng",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "zwlI8NPq6hjITQr4q",
      );

      toast.success("Mesajınız başarıyla gönderildi.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Mesaj gönderilirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className={styles.contactSection}>
        <h2 className={styles.title}>İletişim</h2>

        <div className={styles.table}>
          {info.map((row, i) => (
            <div key={i} className={styles.row}>
              <div className={styles.label}>{row.label}</div>
              <div className={styles.value}>{row.value}</div>
            </div>
          ))}
        </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>İletişim Formu</h3>

          <form className={styles.contactForm} onSubmit={sendMail}>
            <input
              type="text"
              name="name"
              placeholder="Adınız Soyadınız"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="E-posta Adresiniz"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Telefon Numaranız"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Mesajınız"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </form>
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            title="Sanethica konum haritası"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6002.1234567890!2d29.1227317!3d40.9941286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac99600c26d05%3A0xd72543c63c2c9a8b!2sSanethica!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <Footer />
      <Reviews />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />{" "}
    </>
  );
};

export default Contact;
