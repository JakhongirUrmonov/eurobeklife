"use client";

import styles from "./Pricing.module.css";
import Button from "./Button";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

export default function Pricing() {
  const { lang, currency, setCurrency } = useI18n();

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>{getTranslation("pricingHeading", lang)}</h2>
          <div className={styles.currencyToggle}>
            <button 
              className={`${styles.toggleBtn} ${currency === "CZK" ? styles.toggleBtnActive : ""}`}
              onClick={() => setCurrency("CZK")}
            >
              CZK
            </button>
            <button 
              className={`${styles.toggleBtn} ${currency === "EUR" ? styles.toggleBtnActive : ""}`}
              onClick={() => setCurrency("EUR")}
            >
              EUR
            </button>
          </div>
        </div>

        <h3 className={styles.sectionTitle}>
          {lang === "en" ? "Real Estate & Cinematic" :
           lang === "cs" ? "Nemovitosti a kinematografie" :
           lang === "de" ? "Immobilien & Cinematic" :
           "Nieruchomości i Cinematografia"}
        </h3>
        
        <div className={styles.grid}>
          {/* Tier 1 */}
          <div className={styles.card}>
            <h4 className={styles.cardName}>
              {lang === "en" ? "Basic shot" : lang === "cs" ? "Základní záběr" : lang === "de" ? "Basis-Aufnahme" : "Podstawowe ujęcie"}
            </h4>
            <div className={styles.cardPrice}>
              <span className={styles.oldPrice}>{currency === "CZK" ? "3 000 Kč" : "€120"}</span>
              {currency === "CZK" ? "1 500 Kč" : "€60"}
            </div>
            <p className={styles.cardSub}>
              {lang === "en" ? "Up to 1 hour on location · 1 location" : 
               lang === "cs" ? "Až 1 hodiny na místě · 1 lokace" : 
               "Up to 1 hours on location · 1 location"}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.check}>✓</span> 1 edited clip</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Up to 3 raw clips</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Basic file export (MP4, H.264)</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Delivery within 5 business days</li>
            </ul>
            <Button href="#contact" variant="ghost">Book Now</Button>
          </div>

          {/* Tier 2 */}
          <div className={`${styles.card} ${styles.featuredCard}`}>
            <div className={styles.featuredBadge}>Featured</div>
            <h4 className={styles.cardName}>
              {lang === "en" ? "Cinematic edit" : lang === "cs" ? "Kinematografický sestřih" : lang === "de" ? "Cinematic Edit" : "Montaż cinematograficzny"}
            </h4>
            <div className={styles.cardPrice}>
              <span className={styles.oldPrice}>{currency === "CZK" ? "6 000 Kč" : "€240"}</span>
              {currency === "CZK" ? "3 000 Kč" : "€120"}
            </div>
            <p className={styles.cardSub}>
              {lang === "en" ? "Up to 4 hours on location · up to 2 locations" : 
               lang === "cs" ? "Až 4 hodiny na místě · až 2 lokace" : 
               "Up to 4 hours on location · up to 2 locations"}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Edited 60–90 sec highlight reel</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Raw footage archive included</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Color grading + licensed background music</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Up to 2 locations in one session</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Delivery within 7 business days</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> 1 revision round included</li>
            </ul>
            <Button href="#contact" variant="primary">Book Now</Button>
          </div>

          {/* Tier 3 */}
          <div className={styles.card}>
            <h4 className={styles.cardName}>
              {lang === "en" ? "Premium production" : lang === "cs" ? "Prémiová produkce" : lang === "de" ? "Premium-Produktion" : "Produkcja premium"}
            </h4>
            <div className={styles.cardPrice}>
              <span className={styles.oldPrice}>{currency === "CZK" ? "12 000 Kč" : "€480"}</span>
              {currency === "CZK" ? "6 000 Kč" : "€240"}
            </div>
            <p className={styles.cardSub}>
              {lang === "en" ? "Full day · multiple locations" : 
               lang === "cs" ? "Celý den · více lokací" : 
               "Full day · multiple locations"}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.check}>✓</span> 2–3 min cinematic film</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Multiple locations (up to 3)</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Full color grade + custom music selection</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Social media vertical cut (9:16) included</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> 2 revision rounds</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> Delivery within 10 business days</li>
            </ul>
            <Button href="#contact" variant="ghost">Book Now</Button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Add-on</th>
                <th style={{ textAlign: "right" }}>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rush delivery (48-hour turnaround)</td>
                <td>{currency === "CZK" ? "+2 500 Kč" : "+€100"}</td>
              </tr>
              <tr>
                <td>Extra revision round</td>
                <td>{currency === "CZK" ? "+1 200 Kč" : "+€48"}</td>
              </tr>
              <tr>
                <td>Social media vertical cut (9:16)</td>
                <td>{currency === "CZK" ? "+1 800 Kč" : "+€72"}</td>
              </tr>
              <tr>
                <td>Travel outside 50 km radius</td>
                <td>{currency === "CZK" ? "+8 Kč/km" : "+€0.32/km"}</td>
              </tr>
              <tr>
                <td>Raw footage only (no edit, any tier)</td>
                <td>−30%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            {lang === "en" ? "Need something different?" : 
             lang === "cs" ? "Potřebujete něco jiného?" : 
             lang === "de" ? "Brauchen Sie etwas anderes?" : 
             "Potrzebujesz czegoś innego?"}
          </h3>
          <p className={styles.ctaDesc}>
            {lang === "en" ? "Multi-day shoots, agency retainers, international travel, or anything not listed here — let's talk." : 
             lang === "cs" ? "Vícedenní natáčení, agenturní retainery, mezinárodní cestování nebo cokoli, co tu není uvedeno — pojďme si promluvit." : 
             "Multi-day shoots, agency retainers, international travel, or anything not listed here — let's talk."}
          </p>
          <Button href="#contact" variant="primary">Request a custom quote →</Button>
        </div>
      </div>
    </section>
  );
}
