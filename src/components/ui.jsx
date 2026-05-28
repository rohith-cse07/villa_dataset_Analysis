import { useState, useEffect, useRef } from "react";

// ── ANIMATED COUNTER ─────────────────────────────────────────────────────────
export function AnimatedNumber({ target, suffix = "", prefix = "", duration = 1800 }) {
  const [val, setVal]   = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || done) return;
      setDone(true);
      obs.disconnect();
      const start = performance.now();
      const tick  = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        setVal(Math.floor(ease * Math.floor(target)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.3 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration, done]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
}

// ── GLASS CARD ───────────────────────────────────────────────────────────────
export function GlassCard({ children, style = {}, className = "" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:     hovered ? "rgba(212,175,55,0.06)" : "rgba(255,255,255,0.03)",
        border:         hovered ? "1px solid rgba(212,175,55,0.5)" : "1px solid rgba(212,175,55,0.15)",
        borderRadius:   16,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transition:     "all 0.4s cubic-bezier(0.23,1,0.32,1)",
        boxShadow:      hovered
          ? "0 24px 60px rgba(212,175,55,0.12), inset 0 1px 0 rgba(212,175,55,0.2)"
          : "0 8px 32px rgba(0,0,0,0.4)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── SECTION LABEL ────────────────────────────────────────────────────────────
export function SectionLabel({ children }) {
  return (
    <p style={{
      color:          "#D4AF37",
      fontFamily:     "'Outfit',sans-serif",
      fontSize:       11,
      fontWeight:     600,
      letterSpacing:  "0.35em",
      textTransform:  "uppercase",
      marginBottom:   16,
    }}>
      {children}
    </p>
  );
}

// ── SECTION TITLE ─────────────────────────────────────────────────────────────
export function SectionTitle({ children, center = false }) {
  return (
    <h2 style={{
      fontFamily: "'Cormorant Garamond',serif",
      fontSize:   "clamp(36px,4vw,60px)",
      fontWeight: 700,
      color:      "#fff",
      lineHeight: 1.1,
      marginBottom: 24,
      textAlign:  center ? "center" : "left",
    }}>
      {children}
    </h2>
  );
}

// ── GOLD DIVIDER ─────────────────────────────────────────────────────────────
export function GoldDivider({ center = false }) {
  return (
    <div style={{
      width:      60,
      height:     2,
      background: "linear-gradient(90deg,#D4AF37,transparent)",
      marginBottom: 32,
      margin:     center ? "0 auto 32px" : "0 0 32px",
    }} />
  );
}

// ── CUSTOM RECHARTS TOOLTIP ───────────────────────────────────────────────────
export function GoldTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background:     "rgba(10,8,20,0.95)",
      border:         "1px solid rgba(212,175,55,0.4)",
      borderRadius:   8,
      padding:        "10px 16px",
      backdropFilter: "blur(12px)",
    }}>
      <p style={{
        color:       "#D4AF37",
        fontFamily:  "'Cormorant Garamond',serif",
        fontSize:    13,
        marginBottom: 4,
      }}>
        {label}
      </p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: "#fff", fontSize: 13, margin: 0 }}>
          {p.name}:{" "}
          <span style={{ color: "#D4AF37", fontWeight: 600 }}>
            {typeof p.value === "number" && p.value > 999
              ? p.value.toLocaleString()
              : p.value}
          </span>
        </p>
      ))}
    </div>
  );
}

// ── SECTION WRAPPER ───────────────────────────────────────────────────────────
export function Section({ id, children, style = {} }) {
  return (
    <section
      id={id}
      style={{ padding: "100px 0", position: "relative", ...style }}
    >
      {children}
    </section>
  );
}

// ── CONTAINER ─────────────────────────────────────────────────────────────────
export function Container({ children, style = {} }) {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin:   "0 auto",
        padding:  "0 32px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── ICON BADGE ───────────────────────────────────────────────────────────────
export function IconBadge({ children, color = "#D4AF37", size = 44 }) {
  const isGold = color === "#D4AF37";
  return (
    <div style={{
      width:           size,
      height:          size,
      borderRadius:    Math.round(size * 0.27),
      background:      `rgba(${isGold ? "212,175,55" : "147,51,234"},0.1)`,
      border:          `1px solid rgba(${isGold ? "212,175,55" : "147,51,234"},0.25)`,
      display:         "flex",
      alignItems:      "center",
      justifyContent:  "center",
      flexShrink:      0,
    }}>
      {children}
    </div>
  );
}
