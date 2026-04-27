# FPV Drone Pilot Portfolio — Website Build Specification

> **Stack assumptions:** This spec is framework-agnostic. Adapt component names to your stack (React, Vue, Svelte, etc.). All copy is in English — translate per language layer. Pricing always shown in both CZK and EUR. Language auto-detected by visitor IP; always show a manual language toggle in the header.

---

## Global Setup

### Languages
| Code | Region trigger | Currency display | Fallback |
|------|---------------|-----------------|---------|
| `cs` | CZ IP | CZK first, EUR secondary | No |
| `en` | Unknown / all others | EUR first | Yes (default) |
| `de` | DE, AT, CH IP | EUR only | No |
| `pl` | PL IP | EUR or PLN | No |

- Detect language on first load via IP geolocation (e.g. ipapi.co free tier or Cloudflare headers).
- Store user override in `localStorage` key `lang`.
- Always render a `<select>` or flag-icon toggle in the navbar — never hide the switcher.

### Fonts
- Heading font: bold, condensed sans-serif (e.g. Barlow Condensed, Bebas Neue, or similar).
- Body font: clean neutral sans-serif (e.g. Inter, DM Sans).
- Keep to 2 font families max.

### Color palette (suggestion — override with your own)
```
--color-bg:        #0a0a0a   (near black)
--color-surface:   #141414   (dark card bg)
--color-accent:    #f5a623   (amber — adjust to your brand)
--color-text:      #f0f0f0
--color-muted:     #888888
--color-border:    #222222
```

### Shared components
- `<Navbar>` — sticky, transparent on hero, solid on scroll.
- `<Footer>` — links, social icons, legal note, language toggle.
- `<CurrencyToggle>` — CZK / EUR inline switcher on pricing section.
- `<I18n>` — translation wrapper or i18next / vue-i18n / similar.

---

## Section 01 — Hero

### Purpose
First impression. Sell the craft before the visitor reads a word.

### Layout
Full viewport height (`100dvh`). Video fills the entire background. All text is centered or bottom-left aligned over a dark overlay.

### Content

**Background:**
- Autoplay, muted, loop, playsinline video reel.
- Use your best apartment clip as the video source.
- Overlay: `background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)`.
- Fallback: dark poster image for slow connections.

**Headline (H1):**
```
[EN] Prague from a different angle.
[CS] Praha z jiného úhlu pohledu.
[DE] Prag aus einer anderen Perspektive.
[PL] Praga z innej perspektywy.
```

**Subheadline:**
```
[EN] FPV drone cinematography for real estate, commercial spaces & events.
[CS] FPV drony pro nemovitosti, komerční prostory a eventy.
[DE] FPV-Drohnen-Cinematografie für Immobilien, Gewerberäume und Events.
[PL] Cinematografia dronem FPV dla nieruchomości, przestrzeni komercyjnych i eventów.
```

**CTA button (primary):**
```
[EN] View my work  →
[CS] Podívejte se na mou práci  →
[DE] Meine Arbeit ansehen  →
[PL] Zobacz moje realizacje  →
```
→ Smooth scroll to `#portfolio`

**CTA button (secondary, ghost style):**
```
[EN] Get a quote
[CS] Zjistit cenu
[DE] Angebot anfragen
[PL] Zapytaj o wycenę
```
→ Smooth scroll to `#contact`

**Scroll indicator:** Small animated arrow or "scroll" label at the bottom center.

### Technical notes
- Video must be hosted on your own CDN or server — do not rely on YouTube embed here (autoplay is blocked).
- Compress video to ~5–10 MB max for web (use ffmpeg: `ffmpeg -i input.mp4 -vf scale=1920:-1 -crf 28 -preset slow output.mp4`).
- Use `<video preload="metadata">` — do not preload="auto" for performance.
- Add `aria-hidden="true"` to the video element; the section `<section aria-label="Hero">`.

---

## Section 02 — About

### Purpose
Build trust. Show you're a real, certified professional — not just someone with a drone.

### Layout
Two-column on desktop (text left, image/stats right), single column on mobile.

### Content

**Section label (small caps, accent color):**
```
[EN] About me
[CS] O mně
[DE] Über mich
[PL] O mnie
```

**Heading (H2):**
```
[EN] Certified FPV pilot based in Prague.
[CS] Certifikovaný FPV pilot se sídlem v Praze.
[DE] Zertifizierter FPV-Pilot in Prag.
[PL] Certyfikowany pilot FPV z Pragi.
```

**Body paragraph:**
```
[EN]
I fly FPV drones professionally across Prague and Central Europe, specialising in
cinematic real estate tours and commercial space showcases. Every flight is planned,
permitted, and insured — so you get stunning footage with zero hassle.

[CS]
Profesionálně létám s FPV drony po Praze a střední Evropě se specializací na
kinematografické prohlídky nemovitostí a prezentace komerčních prostor. Každý let
je naplánován, povolen a pojištěn — takže získáte úžasné záběry bez starostí.

[DE]
Ich fliege professionell FPV-Drohnen in Prag und Mitteleuropa, spezialisiert auf
kinematografische Immobilientouren und gewerbliche Raumdarstellungen. Jeder Flug ist
geplant, genehmigt und versichert.

[PL]
Profesjonalnie latam dronami FPV po Pradze i Europie Środkowej, specjalizując się
w kinematograficznych wycieczkach po nieruchomościach i prezentacjach przestrzeni
komercyjnych. Każdy lot jest zaplanowany, dozwolony i ubezpieczony.
```

**Certification badge — display prominently:**
```
✓ EASA A2 Certified Pilot
```
Style as a pill/badge in accent color. Under it, small text:
```
[EN] Licensed for close-range urban and indoor flights across the EU.
[CS] Licence pro lety v blízkosti osob v městském prostředí a interiérech v rámci EU.
[DE] Lizenziert für Nahbereichsflüge in städtischen und Innenräumen in der EU.
[PL] Licencja na loty w pobliżu ludzi w przestrzeni miejskiej i wewnątrz budynków w UE.
```

**Stats bar (3 metrics):**
```
10+  |  3        |  1
[EN] Projects completed  |  Industries served  |  Years flying
[CS] Dokončených projektů  |  Odvětví  |  Rok létání
```
Animate counters on scroll-into-view (use IntersectionObserver).

**Gear callout (small, muted text or a collapsible):**
```
[EN] Gear: Custom FPV build — DJI O3 / Walksnail transmission · GoPro / DJI Action cam · [your specific setup]
```
Replace with your actual gear.

### Technical notes
- Use a high-quality portrait photo or a still from one of your shoots as the right-column image.
- The A2 badge should be visible without scrolling on desktop — place it early in the text column.

---

## Section 03 — Portfolio

### Purpose
Show the work. Let the footage sell itself.

### Layout
Full-width section. Tab/filter bar at the top. Video grid below (2–3 columns desktop, 1 column mobile).

### Content

**Section heading:**
```
[EN] Selected work
[CS] Vybrané projekty
[DE] Ausgewählte Arbeiten
[PL] Wybrane realizacje
```

**Filter tabs:**
```
[EN] All  |  Real estate  |  Commercial  |  Events
[CS] Vše  |  Nemovitosti  |  Komerční    |  Eventy
[DE] Alle  |  Immobilien  |  Gewerbe     |  Events
[PL] Wszystkie  |  Nieruchomości  |  Komercyjne  |  Eventy
```

**Grid items — map your clips to these:**

| ID | Label (EN) | Category | Clip |
|----|-----------|----------|------|
| 01 | Apartment · Prague 1 | Real estate | Best apartment clip |
| 02 | Apartment · Prague 2 | Real estate | Second apartment |
| 03 | Apartment · Prague 3 | Real estate | Third apartment |
| 04 | Apartment · Prague Centre | Real estate | Fourth apartment |
| 05 | Apartment · Prague Centre | Real estate | Fifth apartment |
| 06 | Apartment · Old Town | Real estate | Sixth apartment |
| 07 | Apartment · Prague | Real estate | Seventh apartment |
| 08 | Fitness Club · Praha | Commercial | Fitness clip |
| 09 | Barbershop · Praha | Commercial | Barbershop 1 |
| 10 | Barbershop · Praha | Commercial | Barbershop 2 |
| 11 | Events & sports | Events | Coming soon placeholder |

Replace generic labels with actual location names once you have client permission to name them.

**Each grid item contains:**
- Thumbnail (video poster frame or custom thumbnail image).
- On hover: play button icon overlay + category tag pill.
- Click: opens a lightbox modal with the embedded Vimeo/YouTube player.
- Below thumbnail: location label + category tag.

**"Events" placeholder card:**
```
[EN] Available for booking — sports, races, concerts, festivals.
[CS] Dostupné pro rezervaci — sport, závody, koncerty, festivaly.
[DE] Buchbar für Sport, Rennen, Konzerte, Festivals.
[PL] Do rezerwacji — sport, wyścigi, koncerty, festiwale.
```
Style differently (dashed border, muted opacity). CTA: links to `#contact`.

### Technical notes
- Host videos on Vimeo (preferred for portfolio — no ads, clean player) or YouTube (unlisted is fine).
- Use lazy loading on thumbnails: `loading="lazy"`.
- Lightbox: use a lightweight library (e.g. `yet-another-react-lightbox`, `glightbox`) or build minimal custom modal.
- Filter animation: use CSS `opacity` + `transform` transitions (avoid layout-thrashing height animations).

---

## Section 04 — Services

### Purpose
Explain what you actually deliver — before the client sees prices.

### Layout
Two main service cards side by side on desktop. Each card has an icon, title, description, and deliverables list. Below: a "small business" third card spanning full width or forming a row of 3.

### Content

**Section heading:**
```
[EN] What I offer
[CS] Co nabízím
[DE] Mein Angebot
[PL] Co oferuję
```

---

**Service card 1 — Real estate & Cinematic**

Icon: camera / building outline

Title:
```
[EN] Real estate & cinematic FPV
[CS] Nemovitosti a kinematografické FPV
[DE] Immobilien & Cinematic FPV
[PL] Nieruchomości i FPV cinematograficzne
```

Description:
```
[EN] Immersive fly-through tours of apartments, villas, and commercial properties.
     Perfect for listings, developer marketing, and architectural showcases.
[CS] Imerzivní průletové prohlídky bytů, vil a komerčních nemovitostí.
     Ideální pro inzeráty, developerský marketing a architektonické prezentace.
[DE] Immersive Durchflug-Touren durch Wohnungen, Villen und Gewerbeimmobilien.
     Ideal für Inserate, Entwicklermarketing und Architekturpräsentationen.
[PL] Imersyjne przeloty przez apartamenty, wille i nieruchomości komercyjne.
     Idealne dla ogłoszeń, marketingu deweloperskiego i prezentacji architektonicznych.
```

Deliverables list:
```
[EN]
✓ Raw footage (all usable clips)
✓ Edited highlight reel (60–180 sec)
✓ Color grading + licensed music
✓ Social media vertical cut (optional add-on)
✓ Files via WeTransfer / Google Drive within agreed deadline
```

---

**Service card 2 — Events & Sports**

Icon: flag / stopwatch outline

Title:
```
[EN] Events & sports coverage
[CS] Eventy a sportovní pokrytí
[DE] Events & Sportberichterstattung
[PL] Eventy i coverage sportowy
```

Description:
```
[EN] Dynamic aerial coverage of sporting events, races, outdoor competitions,
     and private events. High-energy editing that captures the atmosphere.
[CS] Dynamické letecké pokrytí sportovních akcí, závodů, outdoorových soutěží
     a soukromých eventů. Energická střihová práce zachycující atmosféru.
[DE] Dynamische Luftaufnahmen von Sportveranstaltungen, Rennen, Outdoor-Wettbewerben
     und Privatevents. Energischer Schnitt, der die Atmosphäre einfängt.
[PL] Dynamiczne ujęcia lotnicze z wydarzeń sportowych, wyścigów, zawodów
     plenerowych i wydarzeń prywatnych. Energetyczny montaż oddający atmosferę.
```

Deliverables list:
```
[EN]
✓ On-site coverage (up to agreed hours)
✓ Raw footage archive
✓ Edited highlight film (2–5 min)
✓ Social media teaser cut
✓ Delivery within 7–10 business days
```

---

**Service card 3 — Small business (full width or third column)**

Icon: shop / storefront outline

Title:
```
[EN] Small business showcase
[CS] Prezentace malých podniků
[DE] Kleinunternehmen-Showcase
[PL] Prezentacja małych firm
```

Description:
```
[EN] Flat-rate indoor FPV tour for cafés, gyms, barbershops, restaurants, and retail.
     One shoot, one edited clip — ready to post on Instagram or your website.
[CS] Paušální FPV prohlídka interiéru pro kavárny, fitness centra, holiče, restaurace
     a obchody. Jedno natáčení, jeden sestřih — připraveno ke zveřejnění.
[DE] Pauschalpreis FPV-Tour für Cafés, Fitnessstudios, Barbershops, Restaurants
     und Einzelhandel. Eine Aufnahme, ein Clip — bereit zum Posten.
[PL] Ryczałtowa wycieczka FPV w pomieszczeniach dla kawiarni, siłowni, barberów,
     restauracji i sklepów. Jedno nagranie, jeden zmontowany klip.
```

Flat rate label:
```
[EN] From 3 900 Kč / €155 · up to 2 hours on-site
```

---

**Bottom note (small, muted):**
```
[EN] All services include pre-shoot planning, a safety briefing, and full EASA A2 compliance.
     Travel within 50 km of Prague included. Custom packages available on request.
[CS] Všechny služby zahrnují plánování před natáčením, bezpečnostní briefing a plný soulad
     s EASA A2. Doprava v okruhu 50 km od Prahy zdarma. Na vyžádání jsou dostupné
     individuální balíčky.
```

---

## Section 05 — Pricing

### Purpose
Convert browsers into leads. Transparent pricing builds trust. Always include a "custom quote" escape valve.

### Layout
Two subsections: Real estate tariffs, then Events tariffs. Each is a 3-column card grid. Below both: add-ons table. Bottom: currency toggle + custom quote CTA.

### Currency toggle
```
[EN] Show prices in:  [CZK]  [EUR]
```
Toggle switches all price displays on the page. Default to CZK for CS locale, EUR for all others.

---

### Real estate & cinematic — 3 tiers

**Tier 1 — Basic shot**
```
Name:   [EN] Basic shot  [CS] Základní záběr  [DE] Basis-Aufnahme  [PL] Podstawowe ujęcie
Price:  4 900 Kč / €195
Sub:    Up to 2 hours on location · 1 location

Includes:
- Raw footage only (all usable clips)
- Up to 10 clips delivered
- Basic file export (MP4, H.264)
- Delivery within 5 business days
```

**Tier 2 — Cinematic edit** ← FEATURED (highlight this card)
```
Name:   [EN] Cinematic edit  [CS] Kinematografický sestřih  [DE] Cinematic Edit  [PL] Montaż cinematograficzny
Price:  9 900 Kč / €395
Sub:    Up to 4 hours on location · up to 2 locations

Includes:
- Edited 60–90 sec highlight reel
- Raw footage archive included
- Color grading + licensed background music
- Up to 2 locations in one session
- Delivery within 7 business days
- 1 revision round included
```

**Tier 3 — Premium production**
```
Name:   [EN] Premium production  [CS] Prémiová produkce  [DE] Premium-Produktion  [PL] Produkcja premium
Price:  18 500 Kč / €740
Sub:    Full day · multiple locations

Includes:
- 2–3 min cinematic film
- Multiple locations (up to 3)
- Full color grade + custom music selection
- Social media vertical cut (9:16) included
- 2 revision rounds
- Delivery within 10 business days
```

---

### Events & sports — 3 tiers

**Tier 1 — Event coverage**
```
Name:   [EN] Event coverage  [CS] Pokrytí eventu  [DE] Event-Coverage  [PL] Coverage eventu
Price:  6 500 Kč / €260
Sub:    Up to 3 hours on-site

Includes:
- Raw event footage (all usable clips)
- Basic stabilisation pass
- File delivery within 5 business days
```

**Tier 2 — Highlight reel** ← FEATURED
```
Name:   [EN] Highlight reel  [CS] Highlight reel  [DE] Highlight-Reel  [PL] Highlight reel
Price:  12 900 Kč / €515
Sub:    Up to 6 hours on-site

Includes:
- Edited 2–3 min highlight film
- Dynamic cuts + licensed music
- Raw footage archive included
- 1 revision round
- Delivery within 7 business days
```

**Tier 3 — Full event package**
```
Name:   [EN] Full event package  [CS] Kompletní balíček  [DE] Vollständiges Event-Paket  [PL] Pełny pakiet eventowy
Price:  22 000 Kč / €880
Sub:    Full day coverage

Includes:
- Full-day on-site coverage
- 3–5 min feature film
- Social media teaser cut (60 sec, 9:16)
- 2 revision rounds
- Delivery within 10 business days
```

---

### Small business flat rate

```
Name:   [EN] Indoor showcase  [CS] Interiérová prezentace  [DE] Innen-Showcase  [PL] Prezentacja wnętrz
Price:  3 900 Kč / €155
Sub:    Up to 2 hours on-site · 1 location

Includes:
- 45–60 sec edited tour clip
- Raw footage
- Optimised for Instagram / web
- Delivery within 5 business days
```

---

### Add-ons table

| Add-on (EN) | CZK | EUR |
|-------------|-----|-----|
| Rush delivery (48-hour turnaround) | +2 500 Kč | +€100 |
| Extra revision round | +1 200 Kč | +€48 |
| Social media vertical cut (9:16) | +1 800 Kč | +€72 |
| Travel outside 50 km radius | +8 Kč/km | +€0.32/km |
| Raw footage only (no edit, any tier) | −30% | −30% |
| Subtitle/caption overlay on edited clip | +900 Kč | +€36 |

Translate add-on names for all 4 languages.

---

### Custom quote CTA (below all tiers)

```
[EN] Need something different?
     Multi-day shoots, agency retainers, international travel, or anything
     not listed here — let's talk.
     [Request a custom quote →]  (links to #contact)

[CS] Potřebujete něco jiného?
     Vícedenní natáčení, agenturní retainery, mezinárodní cestování nebo cokoli,
     co tu není uvedeno — pojďme si promluvit.

[DE] Brauchen Sie etwas anderes?
     Mehrtagesdrehs, Agenturverträge, internationale Reisen oder alles,
     was hier nicht aufgeführt ist — sprechen wir darüber.

[PL] Potrzebujesz czegoś innego?
     Wielodniowe nagrania, umowy z agencjami, podróże międzynarodowe lub cokolwiek,
     czego tu nie ma — porozmawiajmy.
```

---

## Section 06 — Social proof

### Purpose
Remove doubt. One real testimonial is worth more than any copy.

### Layout
2–3 quote cards in a row (or carousel on mobile). Optional: client logo strip below.

### Content

**Section heading:**
```
[EN] What clients say
[CS] Co říkají klienti
[DE] Was Kunden sagen
[PL] Co mówią klienci
```

**Testimonial card structure:**
```
"[Quote text — 1–3 sentences max]"

— [Client first name, last initial.]
  [Company or role, if permitted]
  [City]
```

**Placeholder quotes (replace with real ones as soon as possible):**
```
[EN]
"The FPV tour of our apartment sold it in 3 days. Buyers called it the
 best listing video they'd ever seen."
— M.N., Prague landlord

"Shot our barbershop in under 2 hours. The clip has been our best-performing
 Instagram post by far."
— J.K., Barbershop owner, Praha 2

"Professional, punctual, and the footage was exactly what we needed.
 Would book again without hesitation."
— P.V., Real estate agent, RE/MAX Praha
```

**If you don't have testimonials yet:**
Show only 1–2 real ones, even if they're from friends or informal jobs. Don't fake them. Alternatively, replace this section temporarily with a "trusted by" logo strip or leave it out until you have genuine quotes.

**Client logo strip (optional, if clients permit):**
Row of 4–6 grayscale logos. On hover: full color.

---

## Section 07 — FAQ

### Purpose
Answer the questions that stop people from booking. Each FAQ is a hidden sales argument.

### Layout
Accordion (one column). Max 8 questions. Clicking a question expands the answer; others collapse.

### Questions & answers

---

**Q1:**
```
[EN] Are you legally allowed to fly in Prague and other urban areas?
[CS] Smíte legálně létat v Praze a jiných městských oblastech?
[DE] Dürfen Sie legal in Prag und anderen städtischen Gebieten fliegen?
[PL] Czy może Pan legalnie latać w Pradze i innych obszarach miejskich?
```
**A1:**
```
[EN] Yes. I hold an EASA A2 certificate, which permits close-range flights
     in urban environments and near people across all EU member states.
     For indoor shoots, no airspace permit is required. For outdoor urban
     flights, I handle all necessary notifications and permits.

[CS] Ano. Mám certifikát EASA A2, který umožňuje lety v blízkém dosahu
     v městském prostředí a poblíž osob ve všech členských státech EU.
     Pro natáčení v interiérech není potřeba povolení vzdušného prostoru.
     Pro venkovní lety ve městě si zajišťuji všechna potřebná oznámení.
```
(Translate to DE and PL similarly.)

---

**Q2:**
```
[EN] How far do you travel for shoots?
[CS] Jak daleko cestujete za natáčením?
[DE] Wie weit reisen Sie für Drehs?
[PL] Jak daleko podróżuje Pan na nagrania?
```
**A2:**
```
[EN] Travel within 50 km of Prague is included in all packages.
     Beyond that, a travel fee of 8 Kč/km (€0.32/km) applies.
     For international shoots across the EU, contact me for a custom quote —
     I'm available for travel projects.
```

---

**Q3:**
```
[EN] What file formats do you deliver?
[CS] Jaké formáty souborů dodáváte?
```
**A3:**
```
[EN] Edited films are delivered as MP4 (H.264 or H.265, 4K or 1080p depending
     on shoot conditions). Raw footage is delivered in the camera's native format.
     Vertical social media cuts are exported at 9:16 (1080×1920).
     All files are shared via WeTransfer or Google Drive.
```

---

**Q4:**
```
[EN] What happens if the weather is bad on shoot day?
[CS] Co se stane, když bude v den natáčení špatné počasí?
```
**A4:**
```
[EN] FPV drones should not fly in heavy rain or wind above ~30 km/h.
     For outdoor shoots, we agree on a backup date at no extra charge.
     Indoor shoots are weather-independent and can always proceed as planned.
```

---

**Q5:**
```
[EN] Can I get just the raw footage without an edit?
[CS] Mohu dostat pouze surový materiál bez střihu?
```
**A5:**
```
[EN] Yes. Any package can be booked as footage-only at a 30% discount.
     This is popular with agencies that have their own editing team.
```

---

**Q6:**
```
[EN] How long does delivery take?
[CS] Jak dlouho trvá dodání?
```
**A6:**
```
[EN] Standard delivery is 5–10 business days depending on the package.
     Rush 48-hour delivery is available as a paid add-on (see pricing).
```

---

**Q7:**
```
[EN] Do you work with real estate agencies on a retainer basis?
[CS] Spolupracujete s realitními kancelářemi na retainerové bázi?
```
**A7:**
```
[EN] Yes. If you need regular shoots (e.g. 4–8 listings per month),
     we can agree on a monthly retainer with a discounted per-shoot rate.
     Contact me to discuss volume pricing.
```

---

**Q8:**
```
[EN] What areas of Prague do you cover?
[CS] Která pražská místa pokrýváte?
```
**A8:**
```
[EN] All Prague districts. I'm based in Prague and cover the full city —
     Praha 1 through Praha 22, including surrounding municipalities.
     Indoor shoots anywhere in the Czech Republic on request.
```

---

## Section 08 — Contact

### Purpose
Convert interest into an inquiry. Keep friction as low as possible.

### Layout
Two-column on desktop: form on the left, contact info + social links on the right. Single column on mobile.

### Form fields

```
Name *              [text input]
Email *             [email input]
Phone               [tel input — optional]
Project type *      [select dropdown]
  Options:
    [EN] Apartment / real estate tour
         Commercial space (gym, café, shop…)
         Event or sports coverage
         Other / not sure yet
Preferred date      [date input — optional]
Tell me about your project *  [textarea, 4 rows]
How did you find me?  [select — optional]
  Options:
    [EN] Google search
         Instagram
         Recommendation
         Other
[Submit button]
```

**Submit button label:**
```
[EN] Send inquiry →
[CS] Odeslat poptávku →
[DE] Anfrage senden →
[PL] Wyślij zapytanie →
```

**Success message (shown after submit):**
```
[EN] Got it — I'll reply within 24 hours.
[CS] Přijato — odpovím do 24 hodin.
[DE] Erhalten — ich antworte innerhalb von 24 Stunden.
[PL] Otrzymano — odpowiem w ciągu 24 godzin.
```

---

### Right column — contact info block

**Availability line:**
```
[EN] Based in Prague · available across Central Europe
     Response time: within 24 hours
[CS] Sídlo v Praze · dostupný po celé střední Evropě
     Čas odpovědi: do 24 hodin
```

**Email:** your@email.com
**Instagram:** @yourhandle (link to profile)
**YouTube / Vimeo:** link to channel

**Timezone note (for international clients):**
```
[EN] CET / CEST (UTC+1 / UTC+2)
```

**Legal note (small, muted):**
```
[EN] EASA A2 certified · Insured · IČO [your Czech business number if applicable]
[CS] Certifikace EASA A2 · Pojištěno · IČO [číslo]
```

### Technical notes
- Use a backend form handler (e.g. Formspree, Resend, Netlify Forms, or your own endpoint).
- Validate on the client: required fields, valid email format.
- Add honeypot field to prevent spam (hidden field named `website` — if filled, reject submission).
- GDPR consent checkbox required for EU visitors:
  ```
  [EN] I agree to the processing of my personal data for the purpose of responding
       to this inquiry. Privacy policy.
  [CS] Souhlasím se zpracováním svých osobních údajů za účelem odpovědi na tuto poptávku.
  ```

---

## Footer

### Content
```
Left:
  Logo / name
  [EN] FPV drone cinematography · Prague

Center:
  Quick links: Home · Portfolio · Services · Pricing · Contact

Right:
  Instagram icon → link
  YouTube/Vimeo icon → link
  Language selector: 🇨🇿 CS  🇬🇧 EN  🇩🇪 DE  🇵🇱 PL

Bottom strip:
  [EN] © 2025 [Your Name] · All rights reserved · Privacy Policy
  [CS] © 2025 [Vaše jméno] · Všechna práva vyhrazena · Zásady ochrany osobních údajů
```

---

## SEO & Meta tags

Use these per language. Replace `[DOMAIN]` with your actual domain.

```html
<!-- EN -->
<title>FPV Drone Cinematography Prague | Real Estate & Events | [Your Name]</title>
<meta name="description" content="Certified FPV drone pilot based in Prague.
Cinematic real estate tours, commercial space showcases, and event coverage.
EASA A2 licensed. Available across Central Europe." />

<!-- CS -->
<title>FPV Dron Kinematografie Praha | Nemovitosti & Eventy | [Vaše jméno]</title>
<meta name="description" content="Certifikovaný FPV pilot se sídlem v Praze.
Kinematografické prohlídky nemovitostí, prezentace komerčních prostor a pokrytí eventů.
Certifikace EASA A2." />

<!-- DE -->
<title>FPV-Drohnen-Cinematografie Prag | Immobilien & Events | [Ihr Name]</title>
<meta name="description" content="Zertifizierter FPV-Pilot in Prag.
Cinematic Immobilientouren, Gewerberaum-Präsentationen und Event-Coverage.
EASA A2 lizenziert. Verfügbar in Mitteleuropa." />

<!-- PL -->
<title>Cinematografia Dronem FPV Praga | Nieruchomości & Eventy | [Twoje imię]</title>
<meta name="description" content="Certyfikowany pilot FPV z Pragi.
Cinematograficzne wycieczki po nieruchomościach, prezentacje przestrzeni komercyjnych
i coverage eventów. Licencja EASA A2." />
```

**Open Graph:**
```html
<meta property="og:image" content="[DOMAIN]/og-image.jpg" />
<!-- Use a strong still frame from your best apartment clip, 1200×630px -->
<meta property="og:type" content="website" />
```

---

## Performance checklist

- [ ] Video on hero: compressed, poster frame set, no autoplay on mobile (use `prefers-reduced-motion` query)
- [ ] Images: WebP format, lazy loading on all below-fold images
- [ ] Fonts: preloaded, subset to used characters
- [ ] Vimeo/YouTube embeds: use facade pattern (`lite-youtube-embed` or `@slightlyoff/lite-vimeo`) — load player only on click
- [ ] i18n strings: loaded only for active language (split bundles)
- [ ] Form: client-side validation before network request
- [ ] Lighthouse target: 90+ on Performance, 100 on Accessibility

---

*Last updated for build reference. Replace all placeholder copy marked with [brackets] before going live.*