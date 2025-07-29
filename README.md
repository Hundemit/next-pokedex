# 🔥 Pokédex - Next.js

Ein modernes, responsives Pokédex-Web-App gebaut mit Next.js und TypeScript. Entdecke alle Pokémon mit einer benutzerfreundlichen Oberfläche, fortgeschrittener Suche und eleganten Animationen.

![Pokédex Preview](public/img/pokeball.png)

## ✨ Features

- 🔍 **Erweiterte Suche**: Suche Pokémon nach Namen oder filtere nach Typen
- 📱 **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- 🌙 **Dark/Light Mode**: Umschaltbarer Themenmodus
- ⚡ **Infinite Scrolling**: Lade mehr Pokémon beim Scrollen
- 🎨 **Smooth Animations**: Elegant animierte Übergänge und Laden-States
- 📊 **Detaillierte Stats**: Vollständige Pokémon-Informationen mit Diagrammen
- 🎯 **Type-basierte Filterung**: Filtere Pokémon nach ihren Typen
- 🚀 **Performance**: Optimierte Datenladung mit Caching

## 🛠️ Tech Stack

### **Frontend Framework**

- **[Next.js 15](https://nextjs.org/)** - React Framework für Produktion
- **[React 18](https://reactjs.org/)** - UI Library
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety

### **Styling & UI**

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS Framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI Primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent Icon Library
- **[React Fitty](https://github.com/wix/react-fitty)** - Text-fitting Library

### **Animations**

- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready Motion Library
- **[Motion/React](https://motion.dev/)** - Lightweight Animation Library

### **State Management & Data Fetching**

- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight State Management
- **[SWR](https://swr.vercel.app/)** - Data Fetching mit Caching, Revalidation und Fehlerbehandlung

### **API & Daten**

- **[PokéAPI](https://pokeapi.co/)** - RESTful Pokémon API
- **[JSON](https://www.json.org/)** - Datenformat

### **Development Tools**

- **[ESLint](https://eslint.org/)** - Linting Tool
- **[PostCSS](https://postcss.org/)** - CSS Transformer
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS Vendor Prefixing

## 🚀 Installation & Setup

### Voraussetzungen

- Node.js 18+
- npm oder yarn

### 1. Repository klonen

```bash
git clone <repository-url>
cd pokedex
```

### 2. Dependencies installieren

```bash
npm install
# oder
yarn install
```

### 3. Development Server starten

```bash
npm run dev
# oder
yarn dev
```

### 4. App öffnen

Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## 📁 Projekt Struktur

```
pokedex/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (routes)/
│   │   │   ├── pokedex/       # Pokédex Hauptseite
│   │   │   ├── pokemon/       # Einzelne Pokémon Details
│   │   │   └── landing/       # Landing Page
│   │   ├── globals.css        # Globale Styles
│   │   └── layout.tsx         # Root Layout
│   ├── components/            # Wiederverwendbare Komponenten
│   │   ├── ui/               # UI Primitives (Buttons, Cards, etc.)
│   │   └── Sidebar/          # Sidebar Navigation
│   ├── lib/                  # Utility Functions & Services
│   ├── store/                # Zustand State Management
│   ├── types/                # TypeScript Type Definitionen
│   └── hooks/                # Custom React Hooks
├── public/                   # Statische Assets
└── components.json           # Shadcn/ui Konfiguration
```

## 🎨 UI Komponenten

Das Projekt nutzt eine Kombination aus:

- **Custom Components** für Pokémon-spezifische UI
- **Radix UI Primitives** für Barrierefreiheit
- **Shadcn/ui** Pattern für konsistente Komponenten
- **Tailwind CSS** für schnelles, responsives Styling

## 📊 Features im Detail

### 🔍 Such-Funktionalität

- Live-Suche nach Pokémon-Namen
- Typ-basierte Filterung
- Kombinierte Suche und Filter

### 📱 Responsive Design

- Mobile-First Approach
- Adaptive Grid Layouts
- Touch-optimierte Navigation

### ⚡ Performance Optimierungen

- SWR für intelligentes Caching
- Image Optimization mit Next.js
- Lazy Loading für bessere Performance
- Infinite Scrolling für große Datenmengen

### 🎨 Animations & UX

- Smooth Page Transitions
- Loading States mit Skeleton UI
- Micro-Interactions für bessere UX
- Spring-basierte Animationen

## 🌐 API Integration

Das Projekt nutzt die **PokéAPI** (https://pokeapi.co/) für:

- Pokémon Basisdaten
- Detaillierte Statistiken
- Typ-Informationen
- Offizielle Artwork Images

## 🤝 Contributing

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Push zum Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt ist unter der MIT Lizenz verfügbar. Siehe [LICENSE](LICENSE) für weitere Details.

## 🙏 Danksagungen

- **PokéAPI** für die umfassende Pokémon Datenbank
- **The Pokémon Company** für die wunderbaren Pokémon Designs
- **Next.js Team** für das ausgezeichnete Framework
- **Vercel** für das Hosting und die Tools

---

**Gemacht mit ❤️ und ⚡ von [Dein Name]**
