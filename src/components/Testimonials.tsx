"use client";

import styles from "./Testimonials.module.css";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

export default function Testimonials() {
  const { lang } = useI18n();

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{getTranslation("testimonialsHeading", lang)}</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.quote}>
              {lang === "cs" 
                ? "FPV prohlídka našeho bytu ho prodala za 3 dny. Kupující to označili za nejlepší video inzerátu, které kdy viděli." 
                : "The FPV tour of our apartment sold it in 3 days. Buyers called it the best listing video they'd ever seen."}
            </p>
            <div className={styles.author}>M.N.</div>
            <div className={styles.role}>
              {lang === "cs" ? "Majitel bytu, Praha" : "Prague landlord"}
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.quote}>
              {lang === "cs" 
                ? "Natočeno v našem barber shopu za méně než 2 hodiny. Klip je zdaleka naším nejúspěšnějším příspěvkem na Instagramu." 
                : "Shot our barbershop in under 2 hours. The clip has been our best-performing Instagram post by far."}
            </p>
            <div className={styles.author}>J.K.</div>
            <div className={styles.role}>
              {lang === "cs" ? "Majitel Barber shopu, Praha 2" : "Barbershop owner, Praha 2"}
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.quote}>
              {lang === "cs" 
                ? "Profesionální, přesný a záběry byly přesně to, co jsme potřebovali. Neváhal bych ho znovu najmout." 
                : "Professional, punctual, and the footage was exactly what we needed. Would book again without hesitation."}
            </p>
            <div className={styles.author}>P.V.</div>
            <div className={styles.role}>
              {lang === "cs" ? "Realitní makléř, RE/MAX Praha" : "Real estate agent, RE/MAX Praha"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
