"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

export default function About() {
  const { lang } = useI18n();
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState(0);
  const [industries, setIndustries] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate to 10+, 3, 1
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        // Ease out quad
        const ease = progress * (2 - progress);

        setProjects(Math.floor(ease * 10));
        setIndustries(Math.floor(ease * 3));
        setYears(Math.floor(ease * 1));

        if (currentStep >= steps) {
          clearInterval(timer);
          setProjects(10);
          setIndustries(3);
          setYears(1);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <span className={styles.label}>{getTranslation("aboutHeading", lang)}</span>
          <h2 className={styles.title}>{getTranslation("aboutTitle", lang)}</h2>
          <p className={styles.body}>{getTranslation("aboutBody", lang)}</p>
          
          <div className={styles.badgeContainer}>
            <div className={styles.badge}>{getTranslation("certBadge", lang)}</div>
            <p className={styles.badgeSub}>{getTranslation("certSub", lang)}</p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.imageWrapper}>
            {/* User portrait */}
            <img 
              src="/image.webp" 
              alt="FPV Drone Pilot" 
              className={styles.image}
              loading="lazy"
            />
          </div>
          
          <div className={styles.statsBar} ref={statsRef}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{projects}+</span>
              <span className={styles.statLabel}>{getTranslation("projectsLabel", lang)}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{industries}</span>
              <span className={styles.statLabel}>{getTranslation("industriesLabel", lang)}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>{years}</span>
              <span className={styles.statLabel}>{getTranslation("yearsLabel", lang)}</span>
            </div>
          </div>
          
          <div className={styles.gearCallout}>
            Gear: Custom FPV build — DJI O3 / Walksnail · GoPro 11
          </div>
        </div>
      </div>
    </section>
  );
}
