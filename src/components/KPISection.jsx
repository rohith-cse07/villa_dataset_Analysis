import { Home, MapPin, TrendingUp, Star, Layers, Award } from "lucide-react";
import {
  GlassCard, SectionLabel, SectionTitle, AnimatedNumber,
  Section, Container, IconBadge,
} from "./ui.jsx";
import { kpiStats } from "../data/marketData.js";

const ICON_MAP = { Home, MapPin, TrendingUp, Star, Layers, Award };

export default function KPISection() {
  return (
    <Section
      id="kpis"
      style={{
        background: "linear-gradient(180deg,rgba(107,33,168,0.09) 0%,transparent 100%)",
      }}
    >
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 68 }}>
          <SectionLabel>Key Performance Indicators</SectionLabel>
          <SectionTitle center>
            Market Intelligence<br />at a Glance
          </SectionTitle>
          <p style={{
            color:     "rgba(255,255,255,0.42)",
            maxWidth:  480,
            margin:    "0 auto",
            lineHeight: 1.72,
            fontSize:  15,
          }}>
            Six headline metrics extracted from 1,960 luxury villa listings —
            each one reshaping how we read India's premium market.
          </p>
        </div>

        {/* KPI grid */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap:                 24,
        }}
          className="kpi-grid"
        >
          {kpiStats.map(({ value, suffix, label, sub, icon }) => {
            const Icon      = ICON_MAP[icon] || Home;
            const isFirst   = label === "Total Listings" || label === "Peak ₹/sqft" || label === "Features Analyzed";
            const accentColor = isFirst ? "#D4AF37" : "#9333EA";
            return (
              <KPICard
                key={label}
                Icon={Icon}
                value={value}
                suffix={suffix}
                label={label}
                sub={sub}
                color={accentColor}
              />
            );
          })}
        </div>

        {/* Bottom strip */}
        <div style={{
          marginTop:     52,
          padding:       "32px 40px",
          borderRadius:  16,
          background:    "rgba(212,175,55,0.04)",
          border:        "1px solid rgba(212,175,55,0.12)",
          display:       "flex",
          justifyContent:"space-between",
          alignItems:    "center",
          flexWrap:      "wrap",
          gap:           24,
        }}>
          <div>
            <div style={{
              fontFamily:  "'Cormorant Garamond',serif",
              fontSize:    22,
              fontWeight:  700,
              color:       "#fff",
              marginBottom: 6,
            }}>
              Complete Dataset · Zero Nulls After Cleaning
            </div>
            <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 14 }}>
              All 1,960 rows fully cleaned — missing values imputed, duplicates flagged, and data validated across 30 columns.
            </p>
          </div>
          <div style={{
            display:  "flex",
            gap:      12,
            flexWrap: "wrap",
          }}>
            {["Swimming Pool", "Garden", "Gym", "Security", "Power Backup", "Gated Community"].map(tag => (
              <span key={tag} style={{
                padding:      "5px 14px",
                borderRadius: 50,
                background:   "rgba(212,175,55,0.06)",
                border:       "1px solid rgba(212,175,55,0.2)",
                fontSize:     11,
                color:        "#D4AF37",
                fontWeight:   600,
                letterSpacing:"0.05em",
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function KPICard({ Icon, value, suffix, label, sub, color }) {
  return (
    <GlassCard style={{ padding: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <IconBadge color={color} size={48}>
          <Icon size={22} color={color} />
        </IconBadge>
        <div style={{
          width:        8,
          height:       8,
          borderRadius: "50%",
          background:   color,
          marginTop:    4,
          boxShadow:    `0 0 10px ${color}`,
        }} />
      </div>
      <div style={{
        fontFamily:  "'Cormorant Garamond',serif",
        fontSize:    "clamp(36px,3.5vw,50px)",
        fontWeight:  700,
        color,
        lineHeight:  1,
        marginBottom: 10,
      }}>
        <AnimatedNumber target={Math.floor(value)} suffix={suffix} />
      </div>
      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 5 }}>{label}</div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>{sub}</div>
    </GlassCard>
  );
}
