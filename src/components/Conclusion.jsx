import { useEffect, useRef } from "react";
import { GlassCard, SectionLabel, Section, Container } from "./ui.jsx";
import { conclusionHighlights } from "../data/marketData.js";

export default function Conclusion() {
  return (
    <Section
      id="conclusion"
      style={{
        textAlign: "center",
        background: "radial-gradient(ellipse 90% 70% at 50% 110%, rgba(107,33,168,0.35) 0%, transparent 65%)",
        position:  "relative",
        overflow:  "hidden",
      }}
    >
      {/* decorative ring */}
      <div style={{
        position:     "absolute",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%,-50%)",
        width:        700,
        height:       700,
        borderRadius: "50%",
        border:       "1px solid rgba(212,175,55,0.06)",
        pointerEvents:"none",
      }} />
      <div style={{
        position:     "absolute",
        top:          "50%",
        left:         "50%",
        transform:    "translate(-50%,-50%)",
        width:        900,
        height:       900,
        borderRadius: "50%",
        border:       "1px solid rgba(212,175,55,0.04)",
        pointerEvents:"none",
      }} />

      <Container style={{ position: "relative", zIndex: 1 }}>
        <SectionLabel>Final Intelligence Report</SectionLabel>

        <div style={{
          width: 60, height: 2,
          background: "linear-gradient(90deg,#D4AF37,transparent)",
          margin: "0 auto 36px",
        }} />

        <h2 style={{
          fontFamily:  "'Cormorant Garamond',serif",
          fontSize:    "clamp(40px,5.5vw,76px)",
          fontWeight:  700,
          lineHeight:  1.05,
          marginBottom: 28,
          maxWidth:    760,
          margin:      "0 auto 28px",
        }}>
          India's Luxury Villa Market<br />is Entering Its
          <br /><span className="gold-shimmer"> Golden Era</span>
        </h2>

        <p style={{
          color:     "rgba(255,255,255,0.48)",
          maxWidth:  620,
          margin:    "0 auto 56px",
          lineHeight: 1.82,
          fontSize:  17,
        }}>
          Mumbai and Delhi NCR command ultra-premium pricing while Goa emerges as the
          highest ROI-potential market. Across all 7 cities, the signal is unmistakable —
          64% ultra-premium market share, 5BHK demand dominance, and micro-location
          premiums redefining what property value means. India's luxury real estate
          story has only just begun.
        </p>

        {/* Highlight cards */}
        <div style={{
          display:        "flex",
          flexWrap:       "wrap",
          gap:            20,
          justifyContent: "center",
          marginBottom:   64,
        }}>
          {conclusionHighlights.map(({ value, label, sub }) => (
            <GlassCard key={label} style={{ padding: "22px 36px", textAlign: "center", minWidth: 160 }}>
              <div style={{
                fontFamily:  "'Cormorant Garamond',serif",
                fontSize:    30, fontWeight: 700, color: "#D4AF37", lineHeight: 1,
              }}>
                {value}
              </div>
              <div style={{ fontWeight: 600, fontSize: 13, marginTop: 8, marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{sub}</div>
            </GlassCard>
          ))}
        </div>

        {/* Final five insights summary */}
        <div style={{
          maxWidth:     780,
          margin:       "0 auto",
          padding:      "40px 48px",
          borderRadius: 20,
          background:   "rgba(212,175,55,0.04)",
          border:       "1px solid rgba(212,175,55,0.14)",
          textAlign:    "left",
        }}>
          <h4 style={{
            fontFamily:  "'Cormorant Garamond',serif",
            fontSize:    22, fontWeight: 700, color: "#D4AF37",
            marginBottom: 24,
          }}>
            5 Final Conclusions
          </h4>
          {[
            "Mumbai and Delhi NCR dominate ultra-premium pricing with ₹27K and ₹16K avg ₹/sqft.",
            "Premium amenities — swimming pools, gyms — significantly increase luxury villa pricing.",
            "Most luxury buyers prefer spacious 5-bedroom villas, underlining family-centric demand.",
            "Around 64% of villas are priced above ₹4 Crore, signalling ultra-luxury market maturity.",
            "Duplicate listing analysis revealed 6.12% market inefficiencies — data transparency matters.",
          ].map((text, i) => (
            <div key={i} style={{
              display:      "flex",
              gap:          14,
              alignItems:   "flex-start",
              marginBottom: i < 4 ? 16 : 0,
            }}>
              <div style={{
                fontFamily:  "'Cormorant Garamond',serif",
                fontSize:    20, fontWeight: 700, color: "#D4AF37",
                lineHeight:  1.4, flexShrink: 0, minWidth: 20,
              }}>
                {i + 1}.
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
