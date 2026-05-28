// ── CITY PRICE DATA ──────────────────────────────────────────────────────────
export const cityPriceData = [
  { city: "Pune",      price: 8963,  rank: 1 },
  { city: "Chennai",   price: 9340,  rank: 2 },
  { city: "Hyderabad", price: 10180, rank: 3 },
  { city: "Bangalore", price: 12514, rank: 4 },
  { city: "Goa",       price: 16482, rank: 5 },
  { city: "Delhi NCR", price: 16732, rank: 6 },
  { city: "Mumbai",    price: 27110, rank: 7 },
];

// ── AMENITY PREMIUM ──────────────────────────────────────────────────────────
export const amenityPremiumData = [
  { amenity: "Gym",          premium: 0.43, description: "Fitness-focused luxury adds buyer confidence" },
  { amenity: "Swimming Pool",premium: 0.21, description: "Strongest luxury perception signal in the market" },
  { amenity: "Garden",       premium: -0.78, description: "Inversely priced — often lower-density zones" },
];

// ── MARKET COMPOSITION ───────────────────────────────────────────────────────
export const marketComposition = [
  { name: "Ultra Premium (>₹4Cr)", value: 64, color: "#D4AF37" },
  { name: "Entry Luxury (<₹4Cr)",  value: 36, color: "#6B21A8" },
];

// ── BUYER PROFILE ─────────────────────────────────────────────────────────────
export const buyerProfile = [
  { city: "Mumbai",    price: 14.36, sqft: 8618, beds: 4 },
  { city: "Delhi NCR", price: 8.205, sqft: 7473, beds: 5 },
  { city: "Goa",       price: 6.890, sqft: 6043, beds: 5 },
  { city: "Bangalore", price: 3.745, sqft: 6010, beds: 5 },
  { city: "Hyderabad", price: 3.640, sqft: 7315, beds: 5 },
  { city: "Chennai",   price: 3.145, sqft: 6073, beds: 5 },
  { city: "Pune",      price: 3.360, sqft: 5902, beds: 5 },
];

// ── TOP MICRO-LOCATIONS ───────────────────────────────────────────────────────
export const topMicroLocations = [
  { area: "Bandra (W)",          city: "Mumbai",    price: 48000 },
  { area: "Calagute",            city: "Goa",       price: 42000 },
  { area: "Juhu Beach",          city: "Mumbai",    price: 38000 },
  { area: "Bandra West",         city: "Mumbai",    price: 34000 },
  { area: "POWAI",               city: "Mumbai",    price: 30000 },
  { area: "Anjuna",              city: "Goa",       price: 28000 },
  { area: "Gurugram",            city: "Delhi NCR", price: 26000 },
  { area: "Whitefield",          city: "Bangalore", price: 14500 },
  { area: "Banjara Hills Road",  city: "Hyderabad", price: 13800 },
  { area: "Hinjewadi IT Park",   city: "Pune",      price: 10200 },
];

// ── ENTRY MARKETS ─────────────────────────────────────────────────────────────
export const entryMarkets = [
  { area: "ADYAR",              city: "Chennai",   price: 6800 },
  { area: "Wakad Road",         city: "Pune",      price: 7200 },
  { area: "Hinjewadi IT Park",  city: "Pune",      price: 6400 },
  { area: "Banjara Hills Road", city: "Hyderabad", price: 7800 },
  { area: "Candolim Beach",     city: "Goa",       price: 9200 },
  { area: "HSR Layout",         city: "Bangalore", price: 8600 },
];

// ── DUPLICATE ANALYSIS ────────────────────────────────────────────────────────
export const duplicateData = [
  { name: "Unique", value: 1840, color: "#D4AF37" },
  { name: "Duplicate", value: 120, color: "#6B21A8" },
];

// ── BUILDER TRUST INDEX ───────────────────────────────────────────────────────
export const builderData = [
  { builder: "Godrej Properties", listings: 91, trust: 95 },
  { builder: "Lodha Group",       listings: 74, trust: 92 },
  { builder: "Prestige Group",    listings: 47, trust: 89 },
  { builder: "Brigade Group",     listings: 44, trust: 87 },
  { builder: "Rohan Builders",    listings: 42, trust: 84 },
  { builder: "PBEL City",         listings: 34, trust: 80 },
  { builder: "Radiance Realty",   listings: 31, trust: 78 },
];

// ── CITY RADAR ────────────────────────────────────────────────────────────────
export const radarData = [
  { metric: "Price/Sqft",   Mumbai: 95, Goa: 60, DelhiNCR: 62, Bangalore: 46 },
  { metric: "Demand",       Mumbai: 75, Goa: 55, DelhiNCR: 80, Bangalore: 85 },
  { metric: "Luxury Index", Mumbai: 95, Goa: 80, DelhiNCR: 78, Bangalore: 65 },
  { metric: "ROI Potential",Mumbai: 60, Goa: 92, DelhiNCR: 72, Bangalore: 80 },
  { metric: "Inventory",    Mumbai: 70, Goa: 45, DelhiNCR: 75, Bangalore: 88 },
];

// ── KPI STATS ─────────────────────────────────────────────────────────────────
export const kpiStats = [
  { value: 1960,  suffix: "",    label: "Total Listings",   sub: "Luxury villa dataset",    icon: "Home"      },
  { value: 7,     suffix: "",    label: "Cities Covered",   sub: "Metro markets analyzed",  icon: "MapPin"    },
  { value: 27110, suffix: "",    label: "Peak ₹/sqft",      sub: "Mumbai ultra-premium",    icon: "TrendingUp"},
  { value: 64,    suffix: "%",   label: "Ultra Premium",    sub: "Properties above ₹4 Cr", icon: "Star"      },
  { value: 30,    suffix: "",    label: "Features Analyzed",sub: "Per property datapoint",  icon: "Layers"    },
  { value: 6.12,  suffix: "%",   label: "Duplicate Rate",   sub: "Platform redundancy",     icon: "Award"     },
];

// ── INSIGHTS ──────────────────────────────────────────────────────────────────
export const insights = [
  {
    number: "01",
    icon: "TrendingUp",
    color: "#D4AF37",
    title: "Mumbai Dominates Premium Pricing",
    body: "At ₹27,110/sqft average, Mumbai commands nearly 62% higher pricing than second-place Delhi NCR (₹16,732). Bandra (W) peaks at ₹48,000/sqft — rivaling global luxury markets like Singapore and Dubai.",
    stat: "₹27,110",
    statLabel: "Avg ₹/sqft",
  },
  {
    number: "02",
    icon: "Star",
    color: "#9333EA",
    title: "Amenities Are Value Multipliers",
    body: "Gyms deliver a +₹0.43 Crore price premium on average. Swimming pools drive the strongest luxury perception and buyer confidence. Strategic amenity stacking is a proven, data-confirmed value multiplier.",
    stat: "+₹0.43Cr",
    statLabel: "Gym Premium",
  },
  {
    number: "03",
    icon: "Home",
    color: "#D4AF37",
    title: "5BHK Configuration Dominates",
    body: "Across 6 of 7 cities, the median buyer targets 5-bedroom villas — with median area of 6,000–8,600 sqft. Family-centric spacious living is India's core luxury demand driver, not compact premium units.",
    stat: "5 BHK",
    statLabel: "Dominant Config",
  },
  {
    number: "04",
    icon: "Layers",
    color: "#9333EA",
    title: "Ultra-Premium Segment at 64%",
    body: "Nearly two-thirds of all listings are priced above ₹4 Crore. This shift signals that India's luxury villa market has firmly entered the ultra-premium era, with first-time luxury buyers being the minority segment.",
    stat: "64%",
    statLabel: "Ultra Premium",
  },
  {
    number: "05",
    icon: "MapPin",
    color: "#D4AF37",
    title: "Micro-Locations Outperform Cities",
    body: "Bandra (W), Calagute, and Juhu Beach command sqft premiums 40–80% above their city averages. Hyper-local branding is now the dominant pricing variable — more powerful than city-level market forces.",
    stat: "+80%",
    statLabel: "Location Alpha",
  },
  {
    number: "06",
    icon: "Award",
    color: "#9333EA",
    title: "Builder Trust Drives Liquidity",
    body: "Godrej Properties and Lodha Group lead ready-to-move inventory with 91 and 74 listings respectively. High-inventory builders signal faster transaction velocity — critical for institutional luxury investors.",
    stat: "91",
    statLabel: "Godrej Listings",
  },
];

// ── BUSINESS IMPACT ───────────────────────────────────────────────────────────
export const businessImpact = [
  {
    icon: "TrendingUp",
    role: "Investors",
    color: "#D4AF37",
    description: "Data-backed allocation strategies for India's most lucrative real estate segments.",
    points: [
      "Identify undervalued micro-markets before appreciation",
      "Target emerging luxury corridors for superior ROI",
      "Optimize portfolio entry below ₹6 Crore threshold",
      "Leverage builder trust index for liquidity confidence",
    ],
  },
  {
    icon: "Layers",
    role: "Builders & Developers",
    color: "#9333EA",
    description: "Supply-side intelligence to align product with actual buyer demand patterns.",
    points: [
      "Align inventory to confirmed 5BHK demand dominance",
      "Prioritize amenity ROI — Gym outperforms Garden",
      "Target ready-to-move positioning for faster turnover",
      "Price competitively using micro-location benchmarks",
    ],
  },
  {
    icon: "Users",
    role: "Luxury Buyers",
    color: "#D4AF37",
    description: "Navigate complex pricing signals to make confident, informed purchases.",
    points: [
      "Understand city-wide vs micro-location value gaps",
      "Compare furnished vs unfurnished yield premium",
      "Evaluate gated community vs open villa trade-offs",
      "Identify best entry markets under ₹6 Crore",
    ],
  },
  {
    icon: "BarChart2",
    role: "Property Consultants",
    color: "#9333EA",
    description: "Evidence-based advisory tools to elevate client recommendations.",
    points: [
      "Benchmark city pricing with verified sqft metrics",
      "Detect platform duplicate listings distorting prices",
      "Build trust with data-driven builder comparisons",
      "Advise on market composition shift towards ultra-premium",
    ],
  },
];

// ── TECH STACK ────────────────────────────────────────────────────────────────
export const techStack = [
  { emoji: "🐍", name: "Python 3.x",       desc: "Core Language",          category: "backend" },
  { emoji: "🐼", name: "Pandas",            desc: "Data Manipulation",      category: "backend" },
  { emoji: "🔢", name: "NumPy",             desc: "Numerical Computing",    category: "backend" },
  { emoji: "📊", name: "Matplotlib",        desc: "Data Visualization",     category: "backend" },
  { emoji: "🎨", name: "Seaborn",           desc: "Statistical Plots",      category: "backend" },
  { emoji: "📓", name: "Jupyter Notebook",  desc: "Analysis Environment",   category: "backend" },
  { emoji: "⚛️",  name: "React 18",          desc: "Frontend Framework",     category: "frontend" },
  { emoji: "⚡",  name: "Vite 5",            desc: "Build Tool",             category: "frontend" },
  { emoji: "🎯", name: "Tailwind CSS",      desc: "Utility Styling",        category: "frontend" },
  { emoji: "📈", name: "Recharts",          desc: "React Chart Library",    category: "frontend" },
  { emoji: "✨", name: "Framer Motion",     desc: "Animations",             category: "frontend" },
  { emoji: "🚀", name: "Netlify",           desc: "Deployment Platform",    category: "infra" },
];

// ── CONCLUSION HIGHLIGHTS ─────────────────────────────────────────────────────
export const conclusionHighlights = [
  { value: "₹27,110",   label: "Mumbai Peak ₹/sqft",     sub: "Highest in India" },
  { value: "5 BHK",     label: "Most Demanded Config",   sub: "6 of 7 cities" },
  { value: "Bandra (W)",label: "Top Micro-Location",     sub: "₹48,000/sqft" },
  { value: "Goa",       label: "Highest ROI Potential",  sub: "92/100 score" },
];
