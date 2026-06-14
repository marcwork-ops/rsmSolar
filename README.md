# RSM Resilient Energy Solutions — Landing Page

A modern, responsive, mobile-first landing page for **RSM Resilient Energy Solutions**, an EPC
contractor specializing in integrated construction, solar, and energy solutions.

Built with **React + Vite + TypeScript + Material UI**.

## ✨ Features

- Sticky, blur-glass navbar with smooth-scroll navigation and a mobile drawer
- Hero section with primary/secondary CTAs and trust badges
- **Interactive solar savings calculator** (monthly/annual savings + suggested system size)
- "Zero Cash Out" financing loop section
- EPC+ pillars, solar system comparison, About, and Core Values sections
- Lead/quotation form with success snackbar (no backend required yet)
- Fully responsive across mobile, tablet, and desktop
- Custom MUI theme (deep green / charcoal / light gray brand palette)

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## 🗂️ Project Structure

```
Solar/
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx                 # App entry + ThemeProvider
    ├── App.tsx                  # Section composition
    ├── theme.ts                 # MUI theme customization
    ├── constants.ts             # Colors, nav items, calculator rates, content
    ├── index.css                # Smooth-scroll + global resets
    ├── utils/
    │   └── scroll.ts            # scrollToSection helper
    └── components/
        ├── Header.tsx
        ├── HeroSection.tsx
        ├── CalculatorSection.tsx
        ├── ZeroCashOutSection.tsx
        ├── EPCSection.tsx
        ├── SolarTypesSection.tsx
        ├── AboutSection.tsx
        ├── ValuesSection.tsx
        ├── ContactSection.tsx
        ├── Footer.tsx
        └── SectionHeading.tsx   # Reusable section header
```

## 🔧 Calculator Logic

Tunable in `src/constants.ts` → `CALCULATOR_RATES`:

- **Monthly savings:** 30%–60% of the entered bill
- **Annual savings:** monthly savings × 12
- **Suggested system size:** `bill / 1000` kW, minimum 3 kW, rounded to one decimal

All estimates show a disclaimer that final figures depend on site inspection and system design.

## 📨 Quotation Form → Google Sheets

Submissions from the contact/quotation form are POSTed to a **Google Apps Script Web App**, which
appends each one as a row in a Google Sheet — no backend server required.

**Setup:**

1. Create a Google Sheet with headers: `Timestamp | Full Name | Email | Phone | Location | Monthly Bill | Property Type | System Type | Message`.
2. In the sheet, open **Extensions → Apps Script** and add a `doPost(e)` handler that parses
   `e.postData.contents` and calls `sheet.appendRow([...])`.
3. **Deploy → New deployment → Web app**, with *Execute as: Me* and *Who has access: Anyone*.
4. Copy the `/exec` web app URL into `.env`:

   ```bash
   cp .env.example .env
   # then set VITE_QUOTATION_ENDPOINT=<your /exec url>
   ```

5. Restart `npm run dev` so Vite picks up the env var.

If `VITE_QUOTATION_ENDPOINT` is empty, the form shows an error snackbar on submit.

## 📝 Notes
- Hero/background imagery uses Unsplash URLs with a grayscale-friendly dark overlay; swap for
  branded assets before production.
