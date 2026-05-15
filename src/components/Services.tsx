"use client";

import styles from "./Services.module.css";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

export default function Services() {
  const { lang, currency } = useI18n();

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{getTranslation("servicesHeading", lang)}</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>🎥</div>
            <h3 className={styles.cardTitle}>{getTranslation("servicesRealEstateTitle", lang)}</h3>
            <p className={styles.cardDesc}>{getTranslation("servicesRealEstateDesc", lang)}</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Raw footage (all usable clips)
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Edited highlight reel (60–180 sec)
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Color grading + licensed music
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Social media vertical cut (optional add-on)
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Delivery within agreed deadline
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>🏁</div>
            <h3 className={styles.cardTitle}>{getTranslation("servicesEventsTitle", lang)}</h3>
            <p className={styles.cardDesc}>{getTranslation("servicesEventsDesc", lang)}</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> On-site coverage (up to agreed hours)
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Raw footage archive
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Edited highlight film (2–5 min)
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Social media teaser cut
              </li>
              <li className={styles.listItem}>
                <span className={styles.check}>✓</span> Delivery within 7–10 business days
              </li>
            </ul>
          </div>

          <div className={`${styles.card} ${styles.wideCard}`}>
            <div style={{ flex: 1 }}>
              <div className={styles.iconWrapper}>🏪</div>
              <h3 className={styles.cardTitle}>
                {getTranslation("servicesSmallBusiness", lang)}
              </h3>
              <p className={styles.cardDesc}>
                {getTranslation("servicesFlatRate", lang)}
              </p>
              <div className={styles.priceLabel}>
                {getTranslation("servicesFrom", lang)} {currency === "CZK" ? "3 900 Kč" : "€155"} · {getTranslation("servicesUpTo2Hours", lang)}
              </div>
            </div>
          </div>
        </div>

        <p className={styles.bottomNote}>
          {getTranslation("servicesDisclaimer", lang)}
        </p>
      </div>
    </section>
  );
}
