import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { articles } from "./blogData";
import styles from "./detail.module.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = articles.find((item) => item.slug === slug);

  if (!blog) return <div>Blog yazısı bulunamadı.</div>;

  return (
    <div className={styles.detailContainer}>
      <img src={blog.image} alt={blog.title} className={styles.image} />
      <h1>{blog.title}</h1>
      <div
        style={{ marginTop: "1.5rem", lineHeight: "1.7", fontSize: "1.05rem" }}
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    <button className={styles.backBtn} onClick={() => navigate(-1)}>← Geri</button>
    </div>
  );
};

export default BlogDetail;
