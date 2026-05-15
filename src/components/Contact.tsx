"use client";

import styles from "./Contact.module.css";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  const { lang } = useI18n();

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.heading}>
            {getTranslation("contactBookSession", lang)}
          </h2>
          
          <div style={{ marginTop: "var(--spacing-lg)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <InlineWidget 
              url="https://calendly.com/eurobeklife" 
              styles={{ height: "700px", width: "100%" }}
              pageSettings={{
                backgroundColor: '151515',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: 'd4af37',
                textColor: 'ffffff'
              }}
            />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>{getTranslation("contactAvailability", lang)}</h3>
            <p className={styles.infoText}>
              {getTranslation("contactBasedIn", lang)}
              <br />
              {getTranslation("contactResponseTime", lang)}
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>{getTranslation("contactDetails", lang)}</h3>
            <p className={styles.infoText}>
              <a href="mailto:eurobeklife@gmail.com" className={styles.socialLink}>eurobeklife@gmail.com</a>
            </p>
            <div style={{ marginTop: "var(--spacing-xs)" }}>
              <a href="https://www.instagram.com/eurobeklife/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
              <a href="https://www.tiktok.com/@eurobeklife" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>TikTok</a>
              <a href="https://www.youtube.com/@eurobeklife" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>YouTube</a>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>{getTranslation("contactTimezone", lang)}</h3>
            <p className={styles.infoText}>CET / CEST (UTC+1 / UTC+2)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
