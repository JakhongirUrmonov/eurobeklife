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
          {getTranslation("pricingRealEstateCinematic", lang)}
        </h3>
        
        <div className={styles.grid}>
          {/* Tier 1 */}
          <div className={styles.card}>
            <h4 className={styles.cardName}>
              {getTranslation("pricingBasicShot", lang)}
            </h4>
            <div className={styles.cardPrice}>
              <span className={styles.oldPrice}>{currency === "CZK" ? "3 000 Kč" : "€120"}</span>
              {currency === "CZK" ? "1 500 Kč" : "€60"}
            </div>
            <p className={styles.cardSub}>
              {getTranslation("pricingBasicDesc", lang)}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingBasicFeat1", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingBasicFeat2", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingBasicFeat3", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingBasicFeat4", lang)}</li>
            </ul>
            <Button href="#contact" variant="ghost">{getTranslation("bookNow", lang)}</Button>
          </div>

          {/* Tier 2 */}
          <div className={`${styles.card} ${styles.featuredCard}`}>
            <div className={styles.featuredBadge}>Featured</div>
            <h4 className={styles.cardName}>
              {getTranslation("pricingCinematicEdit", lang)}
            </h4>
            <div className={styles.cardPrice}>
              <span className={styles.oldPrice}>{currency === "CZK" ? "6 000 Kč" : "€240"}</span>
              {currency === "CZK" ? "3 000 Kč" : "€120"}
            </div>
            <p className={styles.cardSub}>
              {getTranslation("pricingCinematicDesc", lang)}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingCinematicFeat1", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingCinematicFeat2", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingCinematicFeat3", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingCinematicFeat4", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingCinematicFeat5", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingCinematicFeat6", lang)}</li>
            </ul>
            <Button href="#contact" variant="primary">{getTranslation("bookNow", lang)}</Button>
          </div>

          {/* Tier 3 */}
          <div className={styles.card}>
            <h4 className={styles.cardName}>
              {getTranslation("pricingPremium", lang)}
            </h4>
            <div className={styles.cardPrice}>
              <span className={styles.oldPrice}>{currency === "CZK" ? "12 000 Kč" : "€480"}</span>
              {currency === "CZK" ? "6 000 Kč" : "€240"}
            </div>
            <p className={styles.cardSub}>
              {getTranslation("pricingPremiumDesc", lang)}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingPremiumFeat1", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingPremiumFeat2", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingPremiumFeat3", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingPremiumFeat4", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingPremiumFeat5", lang)}</li>
              <li className={styles.listItem}><span className={styles.check}>✓</span> {getTranslation("pricingPremiumFeat6", lang)}</li>
            </ul>
            <Button href="#contact" variant="ghost">{getTranslation("bookNow", lang)}</Button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{getTranslation("tableAddOn", lang)}</th>
                <th style={{ textAlign: "right" }}>{getTranslation("tablePrice", lang)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{getTranslation("addOnRush", lang)}</td>
                <td>{currency === "CZK" ? "+2 500 Kč" : "+€100"}</td>
              </tr>
              <tr>
                <td>{getTranslation("addOnRevision", lang)}</td>
                <td>{currency === "CZK" ? "+1 200 Kč" : "+€48"}</td>
              </tr>
              <tr>
                <td>{getTranslation("addOnSocial", lang)}</td>
                <td>{currency === "CZK" ? "+1 800 Kč" : "+€72"}</td>
              </tr>
              <tr>
                <td>{getTranslation("addOnTravel", lang)}</td>
                <td>{currency === "CZK" ? "+8 Kč/km" : "+€0.32/km"}</td>
              </tr>
              <tr>
                <td>{getTranslation("addOnRaw", lang)}</td>
                <td>−30%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            {getTranslation("ctaNeedDifferent", lang)}
          </h3>
          <p className={styles.ctaDesc}>
            {getTranslation("ctaNeedDifferentDesc", lang)}
          </p>
          <Button href="#contact" variant="primary">{getTranslation("ctaRequestQuote", lang)}</Button>
        </div>
      </div>
    </section>
  );
}
