"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "cs" | "de" | "pl";
export type Currency = "EUR" | "CZK";

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  isLoaded: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [currency, setCurrencyState] = useState<Currency>("EUR");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Client-side only initialization
    const storedLang = localStorage.getItem("lang") as Language | null;
    const storedCurrency = localStorage.getItem("currency") as Currency | null;

    if (storedLang && storedCurrency) {
      setLangState(storedLang);
      setCurrencyState(storedCurrency);
      setIsLoaded(true);
    } else {
      // Fetch IP geolocation if not stored
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          const country = data.country;
          let detectedLang: Language = "en";
          let detectedCurrency: Currency = "EUR";

          if (country === "CZ") {
            detectedLang = "cs";
            detectedCurrency = "CZK";
          } else if (["DE", "AT", "CH"].includes(country)) {
            detectedLang = "de";
            detectedCurrency = "EUR";
          } else if (country === "PL") {
            detectedLang = "pl";
            detectedCurrency = "EUR"; // or PLN if added later
          }

          setLangState(storedLang || detectedLang);
          setCurrencyState(storedCurrency || detectedCurrency);
          setIsLoaded(true);
        })
        .catch(() => {
          // Fallback on error
          setLangState("en");
          setCurrencyState("EUR");
          setIsLoaded(true);
        });
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    // Optionally switch currency automatically based on lang if preferred
    if (newLang === "cs") setCurrency("CZK");
    else setCurrency("EUR");
  };

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, currency, setCurrency, isLoaded }}>
      <div style={{ visibility: isLoaded ? "visible" : "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
