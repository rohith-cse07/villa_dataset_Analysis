import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  AreaChart, Area,
} from "recharts";
import {
  GlassCard, SectionLabel, SectionTitle, GoldTooltip,
  Section, Container,
} from "./ui.jsx";
import {
  cityPriceData, marketComposition, buyerProfile,
  topMicroLocations, builderData, radarData, duplicateData,
} from "../data/marketData.js";

/* ── gradient defs shared across charts ─────────────────────────────────── */
const DEFS = (
  <defs>
    <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%"   stopColor="#6B21A8" />
      <stop offset="100%" stopColor="#D4AF37" />
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%"   stopColor="#D4AF37" />
      <stop offset="100%" stopColor="#6B21A8" />
    </linearGradient>
    <linearGradient id="areaGold" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%"   stopColor="#D4AF37" stopOpacity={0.35} />
      <stop offset="100%" stopColor="#D4AF37" stopOpacity={0}    />
    </linearGradient>
  </defs>
);

const TICK  = { fill: "rgba(255,255,255,0.45)", fontSize: 11 };
const GRID  = { stroke: "rgba(255,255,255,0.05)" };

export default function AnalyticsSection() {
  return (
    <Section id="analytics" style={{ background: "rgba(107,33,168,0.04)" }}>
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 76 }}>
          <SectionLabel>Data Visualization</SectionLabel>
          <SectionTitle center>
            Premium Analytics<br />Showcase
          </SectionTitle>
          <p style={{
            color: "rgba(255,255,255,0.42)", maxWidth: 500,
            margin: "0 auto", lineHeight: 1.75, fontSize: 15,
          }}>
            Interactive charts powered by real EDA findings — every pixel
            backed by data from 1,960 luxury villa listings.
          </p>
        </div>

        {/* Row 1: City price + Pie */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 28, marginBottom: 28 }}
          className="chart-grid">
          <ChartCard
            title="Price Per Sqft by City"
            sub="Average ₹/sqft · Mumbai leads at ₹27,110"
            badge="Q1 Analysis"
          >
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={cityPriceData} layout="vertical" margin={{ left: 8, right: 16, top: 4, bottom: 4 }}>
                {DEFS}
                <CartesianGrid strokeDasharray="3 3" {...GRID} horizontal={false} />
                <XAxis type="number" tick={TICK} axisLine={false} tickLine={false}
                  tickFormatter={v => `₹${(v/1000).toFixed(0)}K`} />
                <YAxis type="category" dataKey="city" tick={{ ...TICK, fontSize: 12 }}
                  axisLine={false} tickLine={false} width={72} />
                <Tooltip content={<GoldTooltip />} />
                <Bar dataKey="price" name="₹/sqft" radius={[0, 5, 5, 0]} fill="url(#goldGrad)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Market Composition"
            sub="64% ultra-premium · above ₹4 Crore"
            badge="Q5 Analysis"
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  {DEFS}
                  <Pie data={marketComposition} cx="50%" cy="50%"
                    innerRadius={62} outerRadius={98}
                    paddingAngle={5} dataKey="value" stroke="none" startAngle={90} endAngle={-270}>
                    {marketComposition.map(e => <Cell key={e.name} fill={e.color} />)}
                  </Pie>
                  <Tooltip content={<GoldTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", gap: 28, marginTop: 8 }}>
                {marketComposition.map(({ name, value, color }) => (
                  <div key={name} style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 32, fontWeight: 700, color, lineHeight: 1,
                    }}>{value}%</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 4, maxWidth: 90 }}>{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </div>

        {/* Row 2: Buyer profile + Micro-locations */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 28 }}
          className="chart-grid">
          <ChartCard
            title="Median Buyer Profile by City"
            sub="Median price in ₹ Crore · Mumbai at ₹14.36 Cr"
            badge="Q7 Analysis"
          >
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={buyerProfile} margin={{ bottom: 24, top: 4, left: -8, right: 8 }}>
                {DEFS}
                <CartesianGrid strokeDasharray="3 3" {...GRID} vertical={false} />
                <XAxis dataKey="city" tick={{ ...TICK, fontSize: 10 }} axisLine={false}
                  tickLine={false} angle={-30} textAnchor="end" interval={0} />
                <YAxis tick={TICK} axisLine={false} tickLine={false}
                  tickFormatter={v => `₹${v}Cr`} />
                <Tooltip content={<GoldTooltip />} />
                <Bar dataKey="price" name="₹ Crore" radius={[5, 5, 0, 0]} fill="url(#purpleGrad)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard
            title="Top Premium Micro-Locations"
            sub="₹/sqft by area · Bandra (W) leads at ₹48,000"
            badge="Q6 Analysis"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 13, paddingTop: 8 }}>
              {topMicroLocations.map(({ area, city, price }) => {
                const pct   = (price / 52000) * 100;
                const isGold = city === "Mumbai";
                return (
                  <div key={area} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 98, fontSize: 11, color: "rgba(255,255,255,0.7)", flexShrink: 0, lineHeight: 1.3 }}>
                      {area}
                    </div>
                    <div style={{
                      flex: 1, height: 7, borderRadius: 4,
                      background: "rgba(255,255,255,0.05)", overflow: "hidden",
                    }}>
                      <div style={{
                        height: "100%", width: `${pct}%`,
                        background: isGold
                          ? "linear-gradient(90deg,#6B21A8,#D4AF37)"
                          : "linear-gradient(90deg,#4B0082,#9333EA)",
                        borderRadius: 4,
                        transition: "width 1.4s cubic-bezier(0.23,1,0.32,1)",
                      }} />
                    </div>
                    <div style={{
                      fontSize: 11, color: "#D4AF37", fontWeight: 700,
                      width: 44, textAlign: "right", flexShrink: 0,
                    }}>
                      ₹{(price / 1000).toFixed(0)}K
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", width: 52, flexShrink: 0 }}>
                      {city}
                    </div>
                  </div>
                );
              })}
            </div>
          </ChartCard>
        </div>

        {/* Row 3: City radar + Builder trust + Duplicate */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 0.85fr", gap: 28 }}
          className="chart-grid-3">

          <ChartCard title="City Competitive Radar" sub="Multi-factor city comparison" badge="City Index">
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart data={radarData} margin={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <PolarGrid stroke="rgba(255,255,255,0.07)" />
                <PolarAngleAxis dataKey="metric" tick={{ ...TICK, fontSize: 10 }} />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar name="Mumbai"    dataKey="Mumbai"    stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.18} strokeWidth={2} />
                <Radar name="Goa"       dataKey="Goa"       stroke="#9333EA" fill="#9333EA" fillOpacity={0.18} strokeWidth={2} />
                <Radar name="Delhi NCR" dataKey="DelhiNCR"  stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.12} strokeWidth={1.5} />
                <Tooltip content={<GoldTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 8 }}>
              {[["Mumbai","#D4AF37"],["Goa","#9333EA"],["Delhi NCR","#60A5FA"]].map(([n, c]) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{n}</span>
                </div>
              ))}
            </div>
          </ChartCard>

          <ChartCard title="Builder Ready-to-Move Trust" sub="Top builders by inventory count" badge="Q4 Analysis">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={builderData} layout="vertical" margin={{ left: 8, right: 16, top: 4, bottom: 4 }}>
                {DEFS}
                <CartesianGrid strokeDasharray="3 3" {...GRID} horizontal={false} />
                <XAxis type="number" tick={TICK} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="builder" tick={{ ...TICK, fontSize: 9 }}
                  axisLine={false} tickLine={false} width={90} />
                <Tooltip content={<GoldTooltip />} />
                <Bar dataKey="listings" name="Listings" radius={[0, 4, 4, 0]}
                  fill="url(#goldGrad)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Duplicate Listings" sub="6.12% — platform redundancy" badge="Q8 Analysis">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 12 }}>
              <ResponsiveContainer width="100%" height={190}>
                <PieChart>
                  {DEFS}
                  <Pie data={duplicateData} cx="50%" cy="50%"
                    innerRadius={55} outerRadius={85}
                    paddingAngle={4} dataKey="value" stroke="none">
                    {duplicateData.map(e => <Cell key={e.name} fill={e.color} />)}
                  </Pie>
                  <Tooltip content={<GoldTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", gap: 24, marginTop: 10 }}>
                {duplicateData.map(({ name, value, color }) => (
                  <div key={name} style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                      <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{name}</span>
                    </div>
                    <div style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 22, fontWeight: 700, color,
                    }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </ChartCard>
        </div>
      </Container>
    </Section>
  );
}

function ChartCard({ title, sub, badge, children }) {
  return (
    <GlassCard style={{ padding: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
        <div>
          <h3 style={{
            fontFamily:  "'Cormorant Garamond',serif",
            fontSize:    20, fontWeight: 700, marginBottom: 5,
          }}>
            {title}
          </h3>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>{sub}</p>
        </div>
        {badge && (
          <span style={{
            fontSize:    10, fontWeight: 600,
            color:       "#D4AF37",
            padding:     "4px 10px",
            borderRadius: 50,
            border:      "1px solid rgba(212,175,55,0.25)",
            background:  "rgba(212,175,55,0.06)",
            letterSpacing: "0.05em",
            whiteSpace:  "nowrap",
            flexShrink:  0,
          }}>
            {badge}
          </span>
        )}
      </div>
      {children}
    </GlassCard>
  );
}
