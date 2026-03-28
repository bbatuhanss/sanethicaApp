import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { articles } from "./blogData";
import styles from "./detail.module.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = articles.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className={styles.container}>
        <h2>Blog yazısı bulunamadı.</h2>
        <button className={styles.backBtn} onClick={() => navigate("/blog")}>
          ← Bloga Dön
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | Sanethica</title>
        <meta name="description" content={blog.title} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Image */}
          <div className={styles.imageBox}>
            <img src={blog.image} alt={blog.title} className={styles.image} />
          </div>

          {/* Title */}
          <h1 className={styles.title}>{blog.title}</h1>

          {/* Content */}
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Back Button */}
          <button className={styles.backBtn} onClick={() => navigate(-1)}>
            ← Geri Dön
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
