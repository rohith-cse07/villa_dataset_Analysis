# 🏛️ India Luxury Villa Market Analysis

> Cinematic luxury landing page built with React + Vite — powered by Python EDA on 1,960 luxury villa listings across 7 Indian metro cities.

![LuxVilla Intel Preview](https://via.placeholder.com/1200x600/050408/D4AF37?text=LuxVilla+Intel)

---

## 📁 Project Structure

```
luxury-villa-market/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui.jsx              # Shared primitives (GlassCard, AnimatedNumber, etc.)
│   │   ├── Navbar.jsx          # Fixed responsive navbar
│   │   ├── Hero.jsx            # Cinematic hero with particle canvas
│   │   ├── Overview.jsx        # Project overview + animated stat cards
│   │   ├── KPISection.jsx      # 6 animated KPI counter cards
│   │   ├── InsightsSection.jsx # 6 market insight cards with reveal animations
│   │   ├── AnalyticsSection.jsx# 6 Recharts visualizations
│   │   ├── BusinessImpact.jsx  # 4 stakeholder impact cards + banner
│   │   ├── TechStack.jsx       # Grouped tech badge display + pipeline
│   │   ├── Conclusion.jsx      # Cinematic conclusion + 5 findings
│   │   └── Footer.jsx          # Full footer with nav + social links
│   ├── data/
│   │   └── marketData.js       # All chart data + insight content
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles + animations + responsive
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml
└── .gitignore
```

---

## 🚀 Local Development

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+
- Git

### Step 1 — Clone / Download

```bash
# If using Git:
git clone https://github.com/YOUR_USERNAME/luxury-villa-market.git
cd luxury-villa-market

# If downloaded as ZIP:
unzip luxury-villa-market.zip
cd luxury-villa-market
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Start Dev Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. Hot reload is enabled.

### Step 4 — Production Build (optional local test)

```bash
npm run build
npm run preview
```

Open `http://localhost:4173` to preview the production build.

---

## 🌐 GitHub Upload Steps

### Step 1 — Initialize Git

```bash
cd luxury-villa-market
git init
git add .
git commit -m "feat: India Luxury Villa Market Analysis — production ready"
```

### Step 2 — Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `luxury-villa-market`
3. Visibility: Public or Private
4. **Do NOT** initialize with README (we already have one)
5. Click **Create repository**

### Step 3 — Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/luxury-villa-market.git
git branch -M main
git push -u origin main
```

---

## 🟢 Netlify Deployment — Method A: Drag & Drop (Fastest)

### Step 1 — Build the project

```bash
npm run build
```

This creates a `dist/` folder.

### Step 2 — Deploy on Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the entire `dist/` folder onto the upload area
4. Your site is live instantly at a random `.netlify.app` URL

---

## 🟢 Netlify Deployment — Method B: GitHub Integration (Recommended)

### Step 1 — Push code to GitHub (see above)

### Step 2 — Connect to Netlify

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** → Authorize Netlify
4. Select your `luxury-villa-market` repository

### Step 3 — Configure Build Settings

Netlify auto-detects from `netlify.toml`, but verify:

| Setting         | Value            |
|-----------------|------------------|
| Build command   | `npm run build`  |
| Publish directory | `dist`          |
| Node version    | `20`             |

### Step 4 — Deploy

Click **"Deploy site"**. Netlify builds and deploys in ~60 seconds.

### Step 5 — Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain and follow DNS instructions

---

## 🟢 Netlify Deployment — Method C: Netlify CLI

### Step 1 — Install Netlify CLI globally

```bash
npm install -g netlify-cli
```

### Step 2 — Login

```bash
netlify login
```

### Step 3 — Initialize Netlify project

```bash
cd luxury-villa-market
netlify init
```

Select: **Create & configure a new site**

### Step 4 — Build & Deploy

```bash
npm run build
netlify deploy --prod --dir=dist
```

Your live URL is shown immediately.

---

## 🔄 Continuous Deployment (GitHub → Netlify Auto-Deploy)

Once linked via Method B, every `git push` to `main` triggers an automatic Netlify build:

```bash
# Make changes → commit → push → Netlify auto-deploys
git add .
git commit -m "update: improved analytics section"
git push
```

Netlify deploys in ~45–90 seconds. Each PR also gets a preview deploy URL.

---

## 📦 Complete Terminal Commands (Full Workflow)

```bash
# 1. Enter project
cd luxury-villa-market

# 2. Install
npm install

# 3. Dev server
npm run dev

# 4. Production build
npm run build

# 5. Preview build
npm run preview

# 6. Git init & push
git init
git add .
git commit -m "feat: luxury villa market analysis"
git remote add origin https://github.com/YOUR_USERNAME/luxury-villa-market.git
git branch -M main
git push -u origin main

# 7. Netlify CLI deploy
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

## 🎨 Design System

| Token          | Value                              |
|----------------|------------------------------------|
| Primary Gold   | `#D4AF37`                          |
| Light Gold     | `#F5E27D`                          |
| Dark Gold      | `#B8962A`                          |
| Luxury Purple  | `#6B21A8`                          |
| Deep Purple    | `#4B0082`                          |
| Background     | `#050408`                          |
| Display Font   | Cormorant Garamond (serif)         |
| Body Font      | Outfit (sans-serif)                |
| Card Style     | Glassmorphism + gold border        |
| Animations     | CSS keyframes + IntersectionObserver |

---

## 📊 Data Source

Python EDA Notebook analysis of `Luxury_Villa_India_Dataset.csv`:
- **1,960 rows** × **30 columns**
- Cities: Mumbai, Delhi NCR, Bangalore, Hyderabad, Goa, Chennai, Pune
- Libraries: Pandas, NumPy, Matplotlib, Seaborn

---

## 🛠️ Tech Stack

**Analytics:** Python · Pandas · NumPy · Matplotlib · Seaborn · Jupyter Notebook  
**Frontend:** React 18 · Vite 5 · Tailwind CSS · Recharts · Lucide React  
**Deploy:** Netlify · GitHub Actions  

---

## 📄 License

MIT © 2025 LuxVilla Intel
