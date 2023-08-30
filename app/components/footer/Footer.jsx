import React from "react";
import styles from "./Footer.module.scss";
import ESpeed from "../ESpeed";

const Footer = () => {
  return (
    <footer className={styles.footer_component}>
      <ESpeed
        view="home"
        data="views.home.allContent.frontpageRte"
        loading={true}
        transform="html"
      />
    </footer>
  );
};

export default Footer;
