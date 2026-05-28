import { BarChart2, Zap, Shield, Eye } from "lucide-react";
import {
  GlassCard, SectionLabel, SectionTitle, GoldDivider,
  AnimatedNumber, Section, Container,
} from "./ui.jsx";

const FEATURES = [
  { Icon: BarChart2, title: "30 Features Analyzed Per Property",  sub: "From price/sqft to gated community status" },
  { Icon: Zap,       title: "Python-Based EDA & Visualization",   sub: "Pandas · NumPy · Matplotlib · Seaborn" },
  { Icon: Shield,    title: "Data Quality Assured",               sub: "Complete null handling & duplicate detection" },
  { Icon: Eye,       title: "10 Deep Analytical Questions",        sub: "Actionable insights for every stakeholder" },
];

const STAT_CARDS = [
  { val: 1960,  suffix: "",    label: "Villa Listings",    sub: "Across 7 cities",     color: "#D4AF37" },
  { val: 30,    suffix: "+",   label: "Data Features",     sub: "Per property",        color: "#9333EA" },
  { val: 64,    suffix: "%",   label: "Ultra Premium",     sub: "Above ₹4 Crore",      color: "#D4AF37" },
  { val: 6,     suffix: ".12%",label: "Duplicates Found",  sub: "Platform inefficiency",color: "#9333EA" },
];

export default function Overview() {
  return (
    <Section id="overview" style={{ background: "rgba(255,255,255,0.01)" }}>
      <Container>
        <div style={{
          display:       "grid",
          gridTemplateColumns: "1fr 1fr",
          gap:           80,
          alignItems:    "center",
        }}
          className="overview-grid"
        >
          {/* Left copy */}
          <div>
            <SectionLabel>Project Overview</SectionLabel>
            <GoldDivider />
            <SectionTitle>
              Decoding India's<br />Luxury Real Estate DNA
            </SectionTitle>
            <p style={{
              color:        "rgba(255,255,255,0.50)",
              lineHeight:   1.82,
              marginBottom: 36,
              fontSize:     16,
            }}>
              A comprehensive Python-powered analytics study spanning 1,960 luxury
              villa listings across India's premium metropolitan markets. Every data
              point tells a story about where wealth flows, what drives premium
              pricing, and where opportunity hides.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {FEATURES.map(({ Icon, title, sub }) => (
                <FeatureRow key={title} Icon={Icon} title={title} sub={sub} />
              ))}
            </div>
          </div>

          {/* Right stats grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {STAT_CARDS.map(({ val, suffix, label, sub, color }) => (
              <GlassCard key={label} style={{ padding: 30 }}>
                <div style={{
                  fontFamily:  "'Cormorant Garamond',serif",
                  fontSize:    46,
                  fontWeight:  700,
                  color,
                  lineHeight:  1,
                  marginBottom: 10,
                }}>
                  <AnimatedNumber target={val} suffix={suffix} />
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 5 }}>{label}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.38)" }}>{sub}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function FeatureRow({ Icon, title, sub }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
      <div style={{
        width: 42, height: 42, borderRadius: 11,
        background: "rgba(212,175,55,0.1)",
        border:     "1px solid rgba(212,175,55,0.2)",
        display:    "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}>
        <Icon size={18} color="#D4AF37" />
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{sub}</div>
      </div>
    </div>
  );
}
