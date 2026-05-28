import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "./ui.jsx";

const HERO_STATS = [
  ["1,960",   "Listings Analyzed"],
  ["7",       "Metro Cities"],
  ["₹27,110", "Peak ₹/sqft"],
  ["64%",     "Ultra Premium"],
];

export default function Hero() {
  const canvasRef = useRef(null);

  /* ── particle canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx   = canvas.getContext("2d");
    let animId;
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 55 }, () => ({
      x:   Math.random() * W,
      y:   Math.random() * H,
      r:   Math.random() * 1.4 + 0.3,
      vx:  (Math.random() - 0.5) * 0.35,
      vy:  (Math.random() - 0.5) * 0.35,
      a:   Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.a * 0.5})`;
        ctx.fill();
      });

      /* connections */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212,175,55,${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight:  "100vh",
        display:    "flex",
        alignItems: "center",
        position:   "relative",
        overflow:   "hidden",
      }}
    >
      {/* particle canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.7 }} />

      {/* gradient mesh */}
      <div style={{
        position:   "absolute", inset: 0,
        background: "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(107,33,168,0.30) 0%, transparent 65%)",
        zIndex:     1,
      }} />

      {/* floating orbs */}
      <div className="orb" style={{ width: 700, height: 700, top: -280, right: -150, background: "#6B21A8", opacity: 0.28, zIndex: 1 }} />
      <div className="orb" style={{ width: 500, height: 500, bottom: -100, left: -120, background: "#D4AF37", opacity: 0.18, zIndex: 1 }} />
      <div className="orb" style={{ width: 280, height: 280, top: "35%",  right: "8%",  background: "#4B0082", opacity: 0.22, zIndex: 1 }} />

      {/* grid lines */}
      <div style={{
        position:        "absolute", inset: 0, zIndex: 1,
        backgroundImage: "linear-gradient(rgba(212,175,55,0.04) 1px,transparent 1px), linear-gradient(90deg,rgba(212,175,55,0.04) 1px,transparent 1px)",
        backgroundSize:  "64px 64px",
      }} />

      {/* content */}
      <Container style={{ paddingTop: 140, paddingBottom: 100, position: "relative", zIndex: 2 }}>

        {/* badge */}
        <div className="animate-fadeInUp" style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "7px 18px", borderRadius: 50,
          border:  "1px solid rgba(212,175,55,0.3)",
          background: "rgba(212,175,55,0.06)",
          marginBottom: 32,
        }}>
          <span style={{
            display: "block", width: 7, height: 7, borderRadius: "50%",
            background: "#D4AF37",
            animation: "pulse-gold 2s infinite",
          }} />
          <span style={{ color: "#D4AF37", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Premium Market Intelligence · India 2025
          </span>
        </div>

        {/* headline */}
        <h1
          className="animate-fadeInUp delay-1"
          style={{
            fontFamily:   "'Cormorant Garamond',serif",
            fontSize:     "clamp(54px,7.5vw,104px)",
            fontWeight:   700,
            lineHeight:   0.95,
            maxWidth:     820,
            marginBottom: 30,
            letterSpacing: "-0.02em",
          }}
        >
          India<br />
          <span className="gold-shimmer">Luxury Villa</span><br />
          <span style={{ color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>Market Analysis</span>
        </h1>

        {/* subtitle */}
        <p
          className="animate-fadeInUp delay-2"
          style={{
            fontSize:    18,
            color:       "rgba(255,255,255,0.50)",
            maxWidth:    540,
            lineHeight:  1.75,
            marginBottom: 52,
            fontWeight:  300,
          }}
        >
          Data-driven intelligence across India's ultra-premium real estate market —
          1,960 listings, 7 cities, 30 features. Every data point tells a story about
          where luxury capital moves.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fadeInUp delay-3"
          style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 80 }}
        >
          <button className="btn-primary" onClick={() => scrollTo("insights")}>
            Explore Insights
          </button>
          <button className="btn-outline" onClick={() => scrollTo("analytics")}>
            View Analytics
          </button>
        </div>

        {/* bottom stat strip */}
        <div
          className="animate-fadeInUp delay-4"
          style={{
            display:    "flex",
            gap:        48,
            flexWrap:   "wrap",
            paddingTop: 40,
            borderTop:  "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {HERO_STATS.map(([n, l]) => (
            <div key={l}>
              <div style={{
                fontFamily:  "'Cormorant Garamond',serif",
                fontSize:    30,
                fontWeight:  700,
                color:       "#D4AF37",
                lineHeight:  1,
              }}>
                {n}
              </div>
              <div style={{
                fontSize:    12,
                color:       "rgba(255,255,255,0.38)",
                letterSpacing: "0.05em",
                marginTop:   5,
              }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* scroll indicator */}
      <div
        onClick={() => scrollTo("overview")}
        style={{
          position:       "absolute",
          bottom:         32,
          left:           "50%",
          transform:      "translateX(-50%)",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          gap:            6,
          cursor:         "pointer",
          zIndex:         3,
          animation:      "float 2.6s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.28)", letterSpacing: "0.22em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{
          width: 28, height: 44, borderRadius: 14,
          border: "1px solid rgba(212,175,55,0.25)",
          display: "flex", alignItems: "flex-start", justifyContent: "center",
          padding: "6px 0",
        }}>
          <div style={{
            width: 4, height: 8, borderRadius: 2,
            background: "#D4AF37",
            animation: "float 1.6s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}
