import { useState } from "react";
import { SectionLabel, SectionTitle, Section, Container } from "./ui.jsx";
import { techStack } from "../data/marketData.js";

const CATEGORY_LABELS = {
  backend:  "Data Science & Analysis",
  frontend: "Frontend & UI",
  infra:    "Infrastructure",
};
const CATEGORY_COLORS = {
  backend:  "#D4AF37",
  frontend: "#9333EA",
  infra:    "#60A5FA",
};

export default function TechStackSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const grouped = techStack.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <Section id="tech" style={{ background: "rgba(107,33,168,0.04)" }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: 68 }}>
          <SectionLabel>Technology Stack</SectionLabel>
          <SectionTitle center>
            Powered by<br />Data Science Excellence
          </SectionTitle>
          <p style={{
            color: "rgba(255,255,255,0.42)", maxWidth: 480,
            margin: "0 auto", lineHeight: 1.75, fontSize: 15,
          }}>
            From raw CSV ingestion to cinematic web presentation — the full
            stack behind this market intelligence platform.
          </p>
        </div>

        {/* Category groups */}
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} style={{ marginBottom: 48 }}>
            {/* Category label */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
              <div style={{
                height:     1,
                width:      40,
                background: `linear-gradient(90deg,${CATEGORY_COLORS[cat]},transparent)`,
              }} />
              <span style={{
                fontSize:    11, fontWeight: 600,
                color:       CATEGORY_COLORS[cat],
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}>
                {CATEGORY_LABELS[cat]}
              </span>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {items.map((item, i) => {
                const globalIdx = techStack.indexOf(item);
                const hov       = hoveredIdx === globalIdx;
                const color     = CATEGORY_COLORS[cat];
                return (
                  <div
                    key={item.name}
                    onMouseEnter={() => setHoveredIdx(globalIdx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      display:    "inline-flex",
                      alignItems: "center",
                      gap:        12,
                      padding:    "13px 22px",
                      borderRadius: 50,
                      background: hov ? `rgba(${color === "#D4AF37" ? "212,175,55" : color === "#9333EA" ? "147,51,234" : "96,165,250"},0.1)` : "rgba(255,255,255,0.03)",
                      border:     `1px solid ${hov ? color : "rgba(212,175,55,0.15)"}`,
                      cursor:     "default",
                      transition: "all 0.3s ease",
                      transform:  hov ? "translateY(-3px)" : "translateY(0)",
                      boxShadow:  hov ? `0 12px 32px ${color}20` : "none",
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{item.emoji}</span>
                    <div>
                      <div style={{
                        fontWeight: 600, fontSize: 14,
                        color:      hov ? "#fff" : "rgba(255,255,255,0.82)",
                        transition: "color 0.3s",
                      }}>
                        {item.name}
                      </div>
                      <div style={{
                        fontSize:  11,
                        color:     hov ? color : "rgba(255,255,255,0.32)",
                        marginTop: 2,
                        transition:"color 0.3s",
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Pipeline illustration */}
        <div style={{
          marginTop:    16,
          padding:      "32px 40px",
          borderRadius: 16,
          background:   "rgba(255,255,255,0.02)",
          border:       "1px solid rgba(212,175,55,0.1)",
          display:      "flex",
          alignItems:   "center",
          gap:          0,
          overflowX:    "auto",
        }}>
          {[
            { emoji: "📂", label: "CSV Dataset",    sub: "Raw Data" },
            { emoji: "🧹", label: "Pandas Cleaning", sub: "EDA & Nulls" },
            { emoji: "📊", label: "Seaborn Plots",   sub: "10 Analysis Qs" },
            { emoji: "💡", label: "Business Insights",sub: "KPIs & Findings" },
            { emoji: "⚛️",  label: "React + Vite",    sub: "Web Rendering" },
            { emoji: "🚀", label: "Netlify Deploy",  sub: "Live Production" },
          ].map(({ emoji, label, sub }, i, arr) => (
            <>
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                }}>
                  {emoji}
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{label}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>{sub}</div>
                </div>
              </div>
              {i < arr.length - 1 && (
                <div key={`arrow-${i}`} style={{
                  flex: 1, height: 1, minWidth: 20,
                  background: "linear-gradient(90deg,rgba(212,175,55,0.4),rgba(212,175,55,0.1))",
                  margin: "0 8px",
                  marginBottom: 20,
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", right: -4, top: -4,
                    width: 8, height: 8,
                    borderTop: "1.5px solid rgba(212,175,55,0.4)",
                    borderRight: "1.5px solid rgba(212,175,55,0.4)",
                    transform: "rotate(45deg)",
                  }} />
                </div>
              )}
            </>
          ))}
        </div>
      </Container>
    </Section>
  );
}
