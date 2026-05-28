import { TrendingUp, Layers, Users, BarChart2 } from "lucide-react";
import {
  GlassCard, SectionLabel, SectionTitle, Section, Container, IconBadge,
} from "./ui.jsx";
import { businessImpact } from "../data/marketData.js";

const ICON_MAP = { TrendingUp, Layers, Users, BarChart2 };

export default function BusinessImpact() {
  return (
    <Section id="impact">
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <SectionLabel>Business Impact</SectionLabel>
          <SectionTitle center>
            Who This Intelligence<br />Transforms
          </SectionTitle>
          <p style={{
            color: "rgba(255,255,255,0.42)", maxWidth: 480,
            margin: "0 auto", lineHeight: 1.75, fontSize: 15,
          }}>
            From institutional investors to first-time luxury buyers — this analysis
            delivers actionable intelligence for every stakeholder in India's premium real estate ecosystem.
          </p>
        </div>

        {/* Impact cards */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap:                 24,
        }}
          className="impact-grid"
        >
          {businessImpact.map((item) => (
            <ImpactCard key={item.role} item={item} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div style={{
          marginTop:     60,
          borderRadius:  20,
          padding:       "52px 56px",
          background:    "linear-gradient(135deg,rgba(107,33,168,0.2) 0%,rgba(212,175,55,0.08) 100%)",
          border:        "1px solid rgba(212,175,55,0.15)",
          position:      "relative",
          overflow:      "hidden",
        }}>
          {/* glow */}
          <div style={{
            position: "absolute", top: -100, right: -100,
            width: 300, height: 300, borderRadius: "50%",
            background: "rgba(212,175,55,0.08)",
            filter: "blur(60px)",
          }} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 32, position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: 560 }}>
              <h3 style={{
                fontFamily:  "'Cormorant Garamond',serif",
                fontSize:    "clamp(28px,3vw,40px)",
                fontWeight:  700,
                marginBottom: 14,
                lineHeight:  1.15,
              }}>
                Data is the New Currency<br />
                <span className="gold-shimmer">in Luxury Real Estate</span>
              </h3>
              <p style={{ color: "rgba(255,255,255,0.48)", fontSize: 15, lineHeight: 1.72 }}>
                This analysis transforms 1,960 raw listings into strategic intelligence —
                empowering smarter decisions across every layer of India's luxury property market.
              </p>
            </div>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {[
                ["30", "Features"],
                ["10", "Questions"],
                ["7",  "Cities"],
                ["5",  "Charts"],
              ].map(([n, l]) => (
                <div key={l} style={{
                  textAlign:   "center",
                  padding:     "18px 22px",
                  borderRadius: 14,
                  border:      "1px solid rgba(212,175,55,0.2)",
                  background:  "rgba(212,175,55,0.05)",
                  minWidth:    70,
                }}>
                  <div style={{
                    fontFamily:  "'Cormorant Garamond',serif",
                    fontSize:    34, fontWeight: 700, color: "#D4AF37", lineHeight: 1,
                  }}>{n}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", marginTop: 5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function ImpactCard({ item }) {
  const { icon, role, color, description, points } = item;
  const Icon   = ICON_MAP[icon] || TrendingUp;
  const isGold = color === "#D4AF37";

  return (
    <GlassCard style={{ padding: 32, display: "flex", flexDirection: "column" }}>
      <IconBadge color={color} size={52}>
        <Icon size={24} color={color} />
      </IconBadge>

      <h3 style={{
        fontFamily:  "'Cormorant Garamond',serif",
        fontSize:    20, fontWeight: 700,
        margin:      "18px 0 10px",
      }}>
        {role}
      </h3>

      <p style={{
        fontSize:    13, color: "rgba(255,255,255,0.46)",
        lineHeight:  1.65, marginBottom: 22,
      }}>
        {description}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: "auto" }}>
        {points.map(p => (
          <div key={p} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <div style={{
              width: 5, height: 5, borderRadius: "50%",
              background: color,
              marginTop:  7, flexShrink: 0,
              boxShadow:  `0 0 6px ${color}80`,
            }} />
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.56)", lineHeight: 1.6 }}>
              {p}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
