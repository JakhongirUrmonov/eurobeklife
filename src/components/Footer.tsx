"use client";

import styles from "./Footer.module.css";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

export default function Footer() {
  const { lang } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles.logo}>
            EUROBEK<span className={styles.logoAccent}>LIFE</span>
          </div>
          <p className={styles.description}>
            {getTranslation("heroSub", lang)}
          </p>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.heading}>Links</h4>
          <a href="#about" className={styles.link}>{getTranslation("aboutHeading", lang)}</a>
          <a href="#portfolio" className={styles.link}>{getTranslation("portfolioHeading", lang)}</a>
          <a href="#services" className={styles.link}>{getTranslation("servicesHeading", lang)}</a>
          <a href="#pricing" className={styles.link}>{getTranslation("pricingHeading", lang)}</a>
          <a href="#faq" className={styles.link}>{getTranslation("faqHeading", lang)}</a>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>Socials</h4>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/eurobeklife/" className={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@eurobeklife" className={styles.link} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://www.youtube.com/@eurobeklife" className={styles.link} target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} EurobekLife. All rights reserved.</p>
        <div className={styles.legal}>
          <a href="#" className={styles.link}>Privacy Policy</a>
          {" | "}
          <a href="#" className={styles.link}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
