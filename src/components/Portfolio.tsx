"use client";

import { useState } from "react";
import styles from "./Portfolio.module.css";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

type Category = "all" | "real_estate" | "commercial" | "events";

interface VideoItem {
  id: string;
  titleKey: string; // key for title, though some might just be strings
  titleEn: string;
  category: Category;
  videoUrl: string;
  thumbnail: string;
}

const portfolioData: VideoItem[] = [
  { id: "01", titleEn: "Apartment · Prague 1", category: "real_estate", titleKey: "Apartment · Prague 1", videoUrl: "https://www.youtube.com/embed/RY-5xUFBwqs", thumbnail: "https://img.youtube.com/vi/RY-5xUFBwqs/maxresdefault.jpg" },
  { id: "02", titleEn: "Apartment · Prague 2", category: "real_estate", titleKey: "Apartment · Prague 2", videoUrl: "https://www.youtube.com/embed/KCh1vBfFyKc", thumbnail: "https://img.youtube.com/vi/KCh1vBfFyKc/maxresdefault.jpg" },
  { id: "03", titleEn: "Apartment · Prague 3", category: "real_estate", titleKey: "Apartment · Prague 3", videoUrl: "https://www.youtube.com/embed/xA8fBD5eiRY", thumbnail: "https://img.youtube.com/vi/xA8fBD5eiRY/maxresdefault.jpg" },
  { id: "04", titleEn: "Apartment · Prague 4", category: "real_estate", titleKey: "Apartment · Prague 4", videoUrl: "https://www.youtube.com/embed/i-PiQYXHmwM", thumbnail: "https://img.youtube.com/vi/i-PiQYXHmwM/maxresdefault.jpg" },
  { id: "05", titleEn: "Apartment · Prague 5", category: "real_estate", titleKey: "Apartment · Prague 5", videoUrl: "https://www.youtube.com/embed/PSQejDD7U3E", thumbnail: "https://img.youtube.com/vi/PSQejDD7U3E/maxresdefault.jpg" },
  { id: "06", titleEn: "Apartment · Prague 6", category: "real_estate", titleKey: "Apartment · Prague 6", videoUrl: "https://www.youtube.com/embed/8yCzus2QXOk", thumbnail: "https://img.youtube.com/vi/8yCzus2QXOk/maxresdefault.jpg" },
  { id: "07", titleEn: "Apartment · Prague 7", category: "real_estate", titleKey: "Apartment · Prague 7", videoUrl: "https://www.youtube.com/embed/yAjNFTRjqjw", thumbnail: "https://img.youtube.com/vi/yAjNFTRjqjw/maxresdefault.jpg" },
  { id: "08", titleEn: "DreamFit · Praha", category: "commercial", titleKey: "DreamFit · Praha", videoUrl: "https://www.youtube.com/embed/a0Juwrf7Rk0", thumbnail: "https://img.youtube.com/vi/a0Juwrf7Rk0/maxresdefault.jpg" },
  { id: "09", titleEn: "GG Barber · Praha", category: "commercial", titleKey: "GG Barber · Praha", videoUrl: "https://www.youtube.com/embed/i6bBTiRBzm0", thumbnail: "https://img.youtube.com/vi/i6bBTiRBzm0/maxresdefault.jpg" },
  { id: "10", titleEn: "Football Match", category: "events", titleKey: "Football Match", videoUrl: "https://www.youtube.com/embed/phg1i3Wwz6I", thumbnail: "https://img.youtube.com/vi/phg1i3Wwz6I/maxresdefault.jpg" },
  { id: "11", titleEn: "Barbershop 1", category: "commercial", titleKey: "Barbershop 1", videoUrl: "https://www.youtube.com/embed/4cTA2xZwBiU", thumbnail: "https://img.youtube.com/vi/4cTA2xZwBiU/maxresdefault.jpg" },
  { id: "12", titleEn: "Barbershop 2", category: "commercial", titleKey: "Barbershop 2", videoUrl: "https://www.youtube.com/embed/rhUIIq4CKwM", thumbnail: "https://img.youtube.com/vi/rhUIIq4CKwM/maxresdefault.jpg" },
];

export default function Portfolio() {
  const { lang } = useI18n();
  const [filter, setFilter] = useState<Category>("all");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredData = filter === "all" 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{getTranslation("portfolioHeading", lang)}</h2>
        
        <div className={styles.filters}>
          <button 
            className={`${styles.filterBtn} ${filter === "all" ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter("all")}
          >
            {getTranslation("filterAll", lang)}
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === "real_estate" ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter("real_estate")}
          >
            {getTranslation("filterRealEstate", lang)}
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === "commercial" ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter("commercial")}
          >
            {getTranslation("filterCommercial", lang)}
          </button>
          <button 
            className={`${styles.filterBtn} ${filter === "events" ? styles.filterBtnActive : ""}`}
            onClick={() => setFilter("events")}
          >
            {getTranslation("filterEvents", lang)}
          </button>
        </div>

        <div className={styles.grid}>
          {filteredData.map(item => (
            <div key={item.id} className={styles.card} onClick={() => setActiveVideo(item.videoUrl)}>
              <div className={styles.thumbnailWrapper}>
                <img src={item.thumbnail} alt={item.titleEn} className={styles.thumbnail} loading="lazy" />
                <div className={styles.overlay}>
                  <div className={styles.playIcon}>▶</div>
                </div>
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardTitle}>{item.titleEn}</span>
                <span className={styles.cardTag}>
                  {item.category === "real_estate" 
                    ? getTranslation("filterRealEstate", lang) 
                    : item.category === "commercial"
                      ? getTranslation("filterCommercial", lang)
                      : getTranslation("filterEvents", lang)}
                </span>
              </div>
            </div>
          ))}
          
          {(filter === "all" || filter === "events") && (
            <a href="#contact" className={styles.placeholderCard}>
              <h3 className={styles.cardTitle}>{getTranslation("portfolioEventsSports", lang)}</h3>
              <p style={{ color: "var(--color-muted)", fontSize: "0.875rem", marginTop: "var(--spacing-sm)" }}>
                {getTranslation("portfolioAvailableBooking", lang)}
              </p>
            </a>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <div className={`${styles.modal} ${activeVideo ? styles.modalOpen : ""}`} onClick={() => setActiveVideo(null)}>
        <button className={styles.modalClose} onClick={() => setActiveVideo(null)}>×</button>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          {activeVideo && (
            <iframe 
              className={styles.modalIframe} 
              src={`${activeVideo}?autoplay=1`} 
              allow="autoplay; fullscreen" 
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
