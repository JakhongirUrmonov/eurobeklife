"use client";

import styles from "./Hero.module.css";
import Button from "./Button";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

export default function Hero() {
  const { lang } = useI18n();

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.videoContainer}>
        <video 
          className={styles.video} 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/web-15.webm" type="video/webm" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{getTranslation("heroTitle", lang)}</h1>
        <p className={styles.subtitle}>{getTranslation("heroSub", lang)}</p>
        
        <div className={styles.actions}>
          <Button href="#portfolio" variant="primary">
            {getTranslation("viewWork", lang)}
          </Button>
          <Button href="#contact" variant="ghost">
            {getTranslation("getQuote", lang)}
          </Button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollArrow} />
      </div>
    </section>
  );
}
