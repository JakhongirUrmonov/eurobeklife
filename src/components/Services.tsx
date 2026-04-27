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
                {lang === "en" ? "Small business showcase" :
                 lang === "cs" ? "Prezentace malých podniků" :
                 lang === "de" ? "Kleinunternehmen-Showcase" :
                 "Prezentacja małych firm"}
              </h3>
              <p className={styles.cardDesc}>
                {lang === "en" ? "Flat-rate indoor FPV tour for cafés, gyms, barbershops, restaurants, and retail. One shoot, one edited clip — ready to post on Instagram or your website." :
                 lang === "cs" ? "Paušální FPV prohlídka interiéru pro kavárny, fitness centra, holiče, restaurace a obchody. Jedno natáčení, jeden sestřih — připraveno ke zveřejnění." :
                 lang === "de" ? "Pauschalpreis FPV-Tour für Cafés, Fitnessstudios, Barbershops, Restaurants und Einzelhandel. Eine Aufnahme, ein Clip — bereit zum Posten." :
                 "Ryczałtowa wycieczka FPV w pomieszczeniach dla kawiarni, siłowni, barberów, restauracji i sklepów. Jedno nagranie, jeden zmontowany klip."}
              </p>
              <div className={styles.priceLabel}>
                {lang === "en" ? "From" :
                 lang === "cs" ? "Od" :
                 lang === "de" ? "Ab" :
                 "Od"} {currency === "CZK" ? "3 900 Kč" : "€155"} · {lang === "en" ? "up to 2 hours on-site" :
                 lang === "cs" ? "až 2 hodiny na místě" :
                 lang === "de" ? "bis zu 2 Stunden vor Ort" :
                 "do 2 godzin na miejscu"}
              </div>
            </div>
          </div>
        </div>

        <p className={styles.bottomNote}>
          {lang === "en" ? "All services include pre-shoot planning, a safety briefing, and full EASA A2 compliance. Travel within 50 km of Prague included. Custom packages available on request." :
           lang === "cs" ? "Všechny služby zahrnují plánování před natáčením, bezpečnostní briefing a plný soulad s EASA A2. Doprava v okruhu 50 km od Prahy zdarma. Na vyžádání jsou dostupné individuální balíčky." :
           lang === "de" ? "Alle Dienstleistungen umfassen Vorplanung, Sicherheitsbriefing und EASA A2-Konformität. Anfahrt innerhalb 50 km von Prag inklusive. Individuelle Pakete auf Anfrage." :
           "Wszystkie usługi obejmują planowanie przed nagraniem, odprawę bezpieczeństwa i pełną zgodność z EASA A2. Dojazd w promieniu 50 km od Pragi w cenie. Pakiety niestandardowe dostępne na życzenie."}
        </p>
      </div>
    </section>
  );
}
