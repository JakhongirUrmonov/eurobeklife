"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { useI18n } from "@/contexts/I18nContext";
import { getTranslation } from "@/i18n/translations";

export default function FAQ() {
  const { lang, currency } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: {
        en: "Are you legally allowed to fly in Prague and other urban areas?",
        cs: "Smíte legálně létat v Praze a jiných městských oblastech?",
        de: "Dürfen Sie legal in Prag und anderen städtischen Gebieten fliegen?",
        pl: "Czy może Pan legalnie latać w Pradze i innych obszarach miejskich?"
      },
      a: {
        en: "Yes. I hold an EASA A2 certificate, which permits close-range flights in urban environments and near people across all EU member states. For indoor shoots, no airspace permit is required. For outdoor urban flights, I handle all necessary notifications and permits.",
        cs: "Ano. Mám certifikát EASA A2, který umožňuje lety v blízkém dosahu v městském prostředí a poblíž osob ve všech členských státech EU. Pro natáčení v interiérech není potřeba povolení vzdušného prostoru. Pro venkovní lety ve městě si zajišťuji všechna potřebná oznámení.",
        de: "Ja. Ich besitze ein EASA A2-Zertifikat, das Nahbereichsflüge in städtischen Umgebungen in allen EU-Mitgliedstaaten erlaubt. Für Innenaufnahmen ist keine Luftraumgenehmigung erforderlich. Für Außenflüge kümmere ich mich um alle Genehmigungen.",
        pl: "Tak. Posiadam certyfikat EASA A2, który pozwala na loty bliskiego zasięgu w środowisku miejskim we wszystkich państwach członkowskich UE. Do ujęć wewnątrz nie jest wymagane zezwolenie. W przypadku lotów na zewnątrz zajmuję się wszystkimi pozwoleniami."
      }
    },
    {
      q: {
        en: "How far do you travel for shoots?",
        cs: "Jak daleko cestujete za natáčením?",
        de: "Wie weit reisen Sie für Drehs?",
        pl: "Jak daleko podróżuje Pan na nagrania?"
      },
      a: {
        en: `Travel within 50 km of Prague is included in all packages. Beyond that, a travel fee of ${currency === 'CZK' ? '8 Kč/km' : '€0.32/km'} applies. For international shoots across the EU, contact me for a custom quote — I'm available for travel projects.`,
        cs: `Doprava v okruhu 50 km od Prahy je zahrnuta ve všech balíčcích. Nad tento rámec se účtuje cestovní poplatek ${currency === 'CZK' ? '8 Kč/km' : '€0.32/km'}. U mezinárodních natáčení po celé EU mě kontaktujte pro individuální nabídku — jsem k dispozici pro cestovní projekty.`,
        de: `Reisen innerhalb von 50 km um Prag sind in allen Paketen enthalten. Darüber hinaus fällt eine Reisegebühr von ${currency === 'CZK' ? '8 Kč/km' : '€0.32/km'} an. Für internationale Drehs in der gesamten EU kontaktieren Sie mich für ein individuelles Angebot.`,
        pl: `Dojazd w promieniu 50 km od Pragi jest zawarty we wszystkich pakietach. Powyżej tej odległości obowiązuje opłata za dojazd ${currency === 'CZK' ? '8 Kč/km' : '€0.32/km'}. W przypadku międzynarodowych nagrań w UE skontaktuj się w celu uzyskania wyceny.`
      }
    },
    {
      q: {
        en: "What file formats do you deliver?",
        cs: "Jaké formáty souborů dodáváte?",
        de: "Welche Dateiformate liefern Sie?",
        pl: "Jakie formaty plików Pan dostarcza?"
      },
      a: {
        en: "Edited films are delivered as MP4 (H.264 or H.265, 4K or 1080p depending on shoot conditions). Raw footage is delivered in the camera's native format. Vertical social media cuts are exported at 9:16 (1080×1920). All files are shared via WeTransfer or Google Drive.",
        cs: "Upravené filmy jsou dodávány jako MP4 (H.264 nebo H.265, 4K nebo 1080p v závislosti na podmínkách natáčení). Surové záběry jsou dodávány v nativním formátu kamery. Vertikální sestřihy pro sociální sítě jsou exportovány v poměru 9:16. Soubory jsou sdíleny přes WeTransfer nebo Google Drive.",
        de: "Bearbeitete Filme werden als MP4 geliefert. Rohdaten werden im nativen Kameraformat geliefert. Vertikale Social-Media-Schnitte werden im Format 9:16 exportiert. Alle Dateien werden über WeTransfer oder Google Drive geteilt.",
        pl: "Zmontowane filmy są dostarczane w formacie MP4. Surowy materiał jest dostarczany w natywnym formacie kamery. Pionowe formaty do mediów społecznościowych są eksportowane w proporcji 9:16. Wszystkie pliki są udostępniane przez WeTransfer lub Dysk Google."
      }
    },
    {
      q: {
        en: "What happens if the weather is bad on shoot day?",
        cs: "Co se stane, když bude v den natáčení špatné počasí?",
        de: "Was passiert bei schlechtem Wetter am Drehtag?",
        pl: "Co się stanie, jeśli w dniu nagrania będzie zła pogoda?"
      },
      a: {
        en: "FPV drones should not fly in heavy rain or wind above ~30 km/h. For outdoor shoots, we agree on a backup date at no extra charge. Indoor shoots are weather-independent and can always proceed as planned.",
        cs: "FPV drony by neměly létat v silném dešti nebo větru nad ~30 km/h. U venkovních natáčení se domluvíme na náhradním termínu bez příplatku. Vnitřní natáčení nezávisí na počasí a mohou vždy proběhnout podle plánu.",
        de: "FPV-Drohnen sollten nicht bei starkem Regen oder Wind über ~30 km/h fliegen. Für Außenaufnahmen vereinbaren wir ohne Aufpreis einen Ersatztermin. Innenaufnahmen sind wetterunabhängig.",
        pl: "Drony FPV nie powinny latać podczas silnego deszczu lub wiatru powyżej ~30 km/h. W przypadku ujęć na zewnątrz ustalamy termin rezerwowy bez dodatkowych opłat. Nagrania wewnątrz są niezależne od pogody."
      }
    },
    {
      q: {
        en: "Can I get just the raw footage without an edit?",
        cs: "Mohu dostat pouze surový materiál bez střihu?",
        de: "Kann ich nur die Rohdaten ohne Schnitt bekommen?",
        pl: "Czy mogę otrzymać tylko surowy materiał bez montażu?"
      },
      a: {
        en: "Yes. Any package can be booked as footage-only at a 30% discount. This is popular with agencies that have their own editing team.",
        cs: "Ano. Jakýkoli balíček lze zarezervovat pouze jako surový materiál se slevou 30 %. To je oblíbené u agentur, které mají vlastní střihový tým.",
        de: "Ja. Jedes Paket kann als reines Footage-Paket mit 30% Rabatt gebucht werden. Dies ist bei Agenturen mit eigenem Schnitt-Team beliebt.",
        pl: "Tak. Każdy pakiet można zarezerwować tylko jako surowy materiał z 30% zniżką. Jest to popularne wśród agencji posiadających własny zespół montażystów."
      }
    }
  ];

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{getTranslation("faqHeading", lang)}</h2>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button 
                className={styles.question} 
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.q[lang as 'en' | 'cs' | 'de' | 'pl']}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ""}`}>+</span>
              </button>
              <div className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ""}`}>
                <p>{faq.a[lang as 'en' | 'cs' | 'de' | 'pl']}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
