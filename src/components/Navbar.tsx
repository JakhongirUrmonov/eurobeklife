"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useI18n, Language, Currency } from "@/contexts/I18nContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, currency, setCurrency } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.logo}>
        EUROBEK<span className={styles.logoAccent}>LIFE</span>
      </div>
      
      <div className={styles.actions}>
        <div className={styles.selectWrapper}>
          <select 
            className={styles.select} 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value as Currency)}
            aria-label="Select Currency"
          >
            <option value="EUR">EUR</option>
            <option value="CZK">CZK</option>
          </select>
          <span className={styles.selectIcon}>▼</span>
        </div>

        <div className={styles.selectWrapper}>
          <select 
            className={styles.select} 
            value={lang} 
            onChange={(e) => setLang(e.target.value as Language)}
            aria-label="Select Language"
          >
            <option value="en">EN</option>
            <option value="cs">CS</option>
            <option value="de">DE</option>
            <option value="pl">PL</option>
          </select>
          <span className={styles.selectIcon}>▼</span>
        </div>
      </div>
    </nav>
  );
}
