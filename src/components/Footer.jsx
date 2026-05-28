import { useState } from "react";
import { Github, Linkedin, Globe, Mail, Home } from "lucide-react";

const LINKS = [
  { Icon: Github,   label: "GitHub",    href: "https://github.com"    },
  { Icon: Linkedin, label: "LinkedIn",  href: "https://linkedin.com"  },
  { Icon: Globe,    label: "Portfolio", href: "#"                     },
  { Icon: Mail,     label: "Contact",   href: "mailto:hello@luxvilla.in" },
];

const NAV = [
  ["home",       "Home"],
  ["overview",   "Overview"],
  ["insights",   "Insights"],
  ["analytics",  "Analytics"],
  ["impact",     "Impact"],
  ["tech",       "Tech Stack"],
  ["conclusion", "Conclusion"],
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{
      borderTop:  "1px solid rgba(212,175,55,0.1)",
      background: "rgba(0,0,0,0.45)",
      paddingTop: 64,
    }}>
      {/* Main footer content */}
      <div style={{
        maxWidth: 1200,
        margin:   "0 auto",
        padding:  "0 32px 48px",
        display:  "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr",
        gap:      60,
        flexWrap: "wrap",
      }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: "linear-gradient(135deg,#D4AF37,#6B21A8)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Home size={16} color="#fff" />
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 700 }}>
              <span style={{ color: "#D4AF37" }}>LuxVilla</span>
              <span style={{ color: "rgba(255,255,255,0.38)", fontWeight: 400 }}>Intel</span>
            </span>
          </div>
          <p style={{
            fontSize:    14,
            color:       "rgba(255,255,255,0.40)",
            lineHeight:  1.75,
            maxWidth:    280,
            marginBottom: 28,
          }}>
            A premium data intelligence platform analyzing India's ultra-luxury
            villa market — built with Python analytics and React storytelling.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {LINKS.map(({ Icon, label, href }) => (
              <FooterIconLink key={label} Icon={Icon} label={label} href={href} />
            ))}
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <h4 style={{
            fontFamily:   "'Outfit',sans-serif",
            fontSize:     11,
            fontWeight:   600,
            color:        "#D4AF37",
            letterSpacing:"0.25em",
            textTransform:"uppercase",
            marginBottom: 22,
          }}>
            Navigation
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {NAV.map(([id, label]) => (
              <FooterNavLink key={id} onClick={() => scrollTo(id)}>{label}</FooterNavLink>
            ))}
          </div>
        </div>

        {/* Project info column */}
        <div>
          <h4 style={{
            fontFamily:   "'Outfit',sans-serif",
            fontSize:     11,
            fontWeight:   600,
            color:        "#D4AF37",
            letterSpacing:"0.25em",
            textTransform:"uppercase",
            marginBottom: 22,
          }}>
            Project Details
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              ["Dataset",    "1,960 Luxury Listings"],
              ["Cities",     "7 Indian Metro Markets"],
              ["Features",   "30 Per-Property Columns"],
              ["Analyses",   "10 EDA Questions"],
              ["Stack",      "Python · React · Netlify"],
              ["License",    "MIT Open Source"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{k}</span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop:      "1px solid rgba(255,255,255,0.05)",
        padding:        "20px 32px",
        display:        "flex",
        justifyContent: "space-between",
        alignItems:     "center",
        flexWrap:       "wrap",
        gap:            12,
        maxWidth:       1200,
        margin:         "0 auto",
      }}>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
          © 2025 LuxVilla Intel · India Luxury Villa Market Analysis · Built with Python + React
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Use", "Data Sources"].map(l => (
            <span key={l} style={{
              fontSize: 11,
              color:    "rgba(255,255,255,0.22)",
              cursor:   "pointer",
              transition: "color 0.3s",
            }}
              onMouseEnter={e => e.target.style.color = "#D4AF37"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.22)"}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterIconLink({ Icon, label, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width:     36,
        height:    36,
        borderRadius: 10,
        display:   "flex",
        alignItems:"center",
        justifyContent:"center",
        background: hov ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.05)",
        border:    `1px solid ${hov ? "rgba(212,175,55,0.4)" : "rgba(255,255,255,0.08)"}`,
        transition:"all 0.3s",
        color:     hov ? "#D4AF37" : "rgba(255,255,255,0.45)",
        textDecoration:"none",
      }}
    >
      <Icon size={15} />
    </a>
  );
}

function FooterNavLink({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize:   13,
        color:      hov ? "#D4AF37" : "rgba(255,255,255,0.45)",
        cursor:     "pointer",
        transition: "color 0.3s",
        fontFamily: "'Outfit',sans-serif",
      }}
    >
      {children}
    </span>
  );
}
