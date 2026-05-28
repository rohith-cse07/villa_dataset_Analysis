import { useState, useEffect, useRef } from "react";
import {
  TrendingUp, Star, Home, Layers, MapPin, Award,
} from "lucide-react";
import {
  GlassCard, SectionLabel, SectionTitle, Section, Container,
} from "./ui.jsx";
import { insights } from "../data/marketData.js";

const ICON_MAP = { TrendingUp, Star, Home, Layers, MapPin, Award };

function useReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function InsightsSection() {
  return (
    <Section id="insights">
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 76 }}>
          <SectionLabel>Market Intelligence</SectionLabel>
          <SectionTitle center>
            Six Defining<br />Market Insights
          </SectionTitle>
          <p style={{
            color:     "rgba(255,255,255,0.42)",
            maxWidth:  520,
            margin:    "0 auto",
            lineHeight: 1.75,
            fontSize:  15,
          }}>
            Python-derived intelligence from 1,960 luxury listings — each finding
            reshaping how we understand India's premium real estate landscape.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap:                 26,
        }}
          className="insight-grid"
        >
          {insights.map((item, i) => (
            <InsightCard key={item.number} item={item} delay={i * 80} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function InsightCard({ item, delay }) {
  const { number, icon, color, title, body, stat, statLabel } = item;
  const Icon = ICON_MAP[icon] || TrendingUp;
  const [ref, visible] = useReveal();
  const isGold = color === "#D4AF37";

  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      <GlassCard style={{ padding: 34, height: "100%" }}>
        {/* Top row */}
        <div style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "flex-start",
          marginBottom:   26,
        }}>
          <span style={{
            fontFamily:  "'Cormorant Garamond',serif",
            fontSize:    52,
            fontWeight:  700,
            color:       "rgba(255,255,255,0.05)",
            lineHeight:  1,
            userSelect:  "none",
          }}>
            {number}
          </span>
          <div style={{
            width:       46,
            height:      46,
            borderRadius: 13,
            background:  `rgba(${isGold ? "212,175,55" : "147,51,234"},0.1)`,
            border:      `1px solid rgba(${isGold ? "212,175,55" : "147,51,234"},0.28)`,
            display:     "flex",
            alignItems:  "center",
            justifyContent: "center",
          }}>
            <Icon size={20} color={color} />
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily:  "'Cormorant Garamond',serif",
          fontSize:    22,
          fontWeight:  700,
          marginBottom: 14,
          lineHeight:  1.25,
        }}>
          {title}
        </h3>

        {/* Body */}
        <p style={{
          color:      "rgba(255,255,255,0.48)",
          fontSize:   14,
          lineHeight: 1.75,
          marginBottom: 24,
        }}>
          {body}
        </p>

        {/* Stat highlight */}
        <div style={{
          display:       "flex",
          alignItems:    "center",
          gap:           14,
          paddingTop:    20,
          borderTop:     "1px solid rgba(255,255,255,0.06)",
        }}>
          <div>
            <div style={{
              fontFamily:  "'Cormorant Garamond',serif",
              fontSize:    26,
              fontWeight:  700,
              color,
              lineHeight:  1,
            }}>
              {stat}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 3 }}>
              {statLabel}
            </div>
          </div>
          <div style={{
            flex:       1,
            height:     2,
            background: `linear-gradient(90deg,${color},transparent)`,
            borderRadius: 2,
          }} />
        </div>
      </GlassCard>
    </div>
  );
}
