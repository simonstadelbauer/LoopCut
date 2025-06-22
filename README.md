# LoopCut Website

Eine moderne, responsive Website für die iOS App LoopCut, entwickelt mit Astro und Tailwind CSS.

## 🚀 Über LoopCut

LoopCut ist eine iOS App, die deine täglichen Gedanken in klare Zukunftspläne verwandelt. Die App konzentriert sich auf Einfachheit und Effektivität:

- **Ein Screen**: Alle Funktionen in einer übersichtlichen Oberfläche
- **KI-gestützt**: Automatische Analyse und Planung am Tagesende
- **Fokussiert**: Keine Streaks oder Gamification - nur echte Ergebnisse
- **CBT-basiert**: Gezielte Vertiefung nach bewährten Mustern

## 🛠️ Technologie-Stack

- **Framework**: [Astro](https://astro.build/) - Statische Site-Generierung
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
- **Hosting**: Netlify (geplant)
- **Version Control**: GitHub

## 📁 Projektstruktur

```
loopcut-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── Download.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## 🚀 Installation & Setup

### Voraussetzungen

- Node.js (Version 16 oder höher)
- npm oder yarn

### Installation

1. Repository klonen:
```bash
git clone https://github.com/simonstadelbauer/LoopCut.git
cd LoopCut
```

2. Dependencies installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

4. Website im Browser öffnen:
```
http://localhost:4321
```

### Build für Produktion

```bash
npm run build
```

### Preview des Builds

```bash
npm run preview
```

## 🎨 Design-Prinzipien

Die Website folgt deutschen Webdesign-Standards:

- **Einfachheit**: Klare, unkomplizierte Struktur
- **Professionalität**: Modern aber nicht überladen
- **Mobile-First**: Responsive Design für alle Geräte
- **Performance**: Optimiert für schnelle Ladezeiten
- **Barrierefreiheit**: Zugänglich für alle Nutzer

## 📱 Website-Sektionen

### 1. Header
- Navigation mit allen wichtigen Bereichen
- Responsive Mobile-Menü
- Call-to-Action Button

### 2. Hero-Sektion
- Hauptvalue Proposition
- App-Mockup
- Klare Handlungsaufforderung

### 3. Features
- Drei Hauptfunktionen erklärt
- Zusätzliche Benefits
- "Keine Streaks" Philosophie

### 4. How It Works
- 4-Schritt-Prozess
- Täglicher Ablauf
- Visuelle Darstellung

### 5. Download
- App Store Informationen
- Systemanforderungen
- E-Mail-Benachrichtigung
- FAQ

### 6. Footer
- Kontaktinformationen
- Rechtliche Links (Impressum, Datenschutz)
- Newsletter-Anmeldung

## 🌐 Deployment

### Netlify (Empfohlen)

1. Repository mit Netlify verbinden
2. Build-Einstellungen:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Automatische Deployments bei Git-Push

### Andere Hosting-Anbieter

Die Website kann auf jedem statischen Hosting-Service deployed werden:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🔧 Anpassungen

### Farben ändern

Die Primärfarben können in `tailwind.config.mjs` angepasst werden:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... weitere Abstufungen
  }
}
```

### Inhalte bearbeiten

Alle Texte und Inhalte befinden sich in den entsprechenden `.astro` Komponenten unter `src/components/`.

### Neue Sektionen hinzufügen

1. Neue Komponente in `src/components/` erstellen
2. In `src/pages/index.astro` importieren und einbinden

## 📄 Rechtliche Seiten

Für die Produktionsversion müssen folgende Seiten erstellt werden:

- `/datenschutz` - Datenschutzerklärung
- `/impressum` - Impressum (deutsche Pflicht)
- `/agb` - Allgemeine Geschäftsbedingungen

## 🤝 Beitragen

1. Fork des Repositories
2. Feature-Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📞 Kontakt

- **Entwickler**: Simon Stadelbauer
- **E-Mail**: kontakt@loopcut.app
- **GitHub**: [github.com/simonstadelbauer/LoopCut](https://github.com/simonstadelbauer/LoopCut.git)

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

---

**Entwickelt mit ❤️ in Deutschland** 