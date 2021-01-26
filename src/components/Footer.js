import React from "react";
import Contact from "./Contact";
import styles from "./styles/footerStyles.module.scss";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Contact />
      <p>By Theophile Kango &copy; {new Date().getFullYear()}</p>
    </section>
  );
};

export default Footer;
