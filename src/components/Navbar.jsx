import { useState, useEffect } from "react";
import { Home } from "lucide-react";

const NAV_LINKS = [
  ["overview",  "Overview"],
  ["insights",  "Insights"],
  ["analytics", "Analytics"],
  ["impact",    "Impact"],
  ["tech",      "Tech Stack"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position:       "fixed",
      top:            0,
      left:           0,
      right:          0,
      zIndex:         100,
      padding:        "0 40px",
      height:         72,
      display:        "flex",
      alignItems:     "center",
      justifyContent: "space-between",
      background:     scrolled ? "rgba(5,4,8,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom:   scrolled ? "1px solid rgba(212,175,55,0.1)" : "none",
      transition:     "all 0.4s ease",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
        onClick={() => scrollTo("home")}>
        <div style={{
          width: 34, height: 34, borderRadius: 9,
          background: "linear-gradient(135deg,#D4AF37,#6B21A8)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(212,175,55,0.35)",
        }}>
          <Home size={16} color="#fff" />
        </div>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 700 }}>
          <span style={{ color: "#D4AF37" }}>LuxVilla</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>Intel</span>
        </span>
      </div>

      {/* Desktop links */}
      <div className="nav-desktop" style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {NAV_LINKS.map(([id, label]) => (
          <NavLink key={id} onClick={() => scrollTo(id)}>{label}</NavLink>
        ))}
        <button
          className="btn-primary"
          style={{ padding: "9px 22px", fontSize: 12 }}
          onClick={() => scrollTo("insights")}
        >
          Explore Now
        </button>
      </div>

      {/* Mobile burger */}
      <button
        className="nav-burger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display:    "none",
          background: "none",
          border:     "none",
          cursor:     "pointer",
          padding:    8,
          flexDirection: "column",
          gap:        5,
        }}
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display:      "block",
            width:        22,
            height:       2,
            background:   "#D4AF37",
            borderRadius: 2,
            transition:   "all 0.3s",
            transform: menuOpen
              ? i === 0 ? "rotate(45deg) translate(5px,5px)"
              : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
              : "scaleX(0)"
              : "none",
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position:   "absolute",
          top:        72,
          left:       0,
          right:      0,
          background: "rgba(5,4,8,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(212,175,55,0.15)",
          padding:    "24px 40px",
          display:    "flex",
          flexDirection: "column",
          gap:        20,
        }}>
          {NAV_LINKS.map(([id, label]) => (
            <span key={id} onClick={() => scrollTo(id)} style={{
              color:      "rgba(255,255,255,0.7)",
              fontSize:   16,
              fontFamily: "'Outfit',sans-serif",
              cursor:     "pointer",
              letterSpacing: "0.05em",
              padding:    "8px 0",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>{label}</span>
          ))}
          <button className="btn-primary" onClick={() => scrollTo("insights")} style={{ alignSelf: "flex-start" }}>
            Explore Now
          </button>
        </div>
      )}
    </nav>
  );
}

function NavLink({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        color:         hov ? "#D4AF37" : "rgba(255,255,255,0.55)",
        fontSize:      13,
        fontWeight:    500,
        letterSpacing: "0.08em",
        cursor:        "pointer",
        transition:    "color 0.3s",
        textTransform: "uppercase",
        fontFamily:    "'Outfit',sans-serif",
      }}
    >
      {children}
    </span>
  );
}
