import Navbar         from "./components/Navbar.jsx";
import Hero           from "./components/Hero.jsx";
import Overview       from "./components/Overview.jsx";
import KPISection     from "./components/KPISection.jsx";
import InsightsSection from "./components/InsightsSection.jsx";
import AnalyticsSection from "./components/AnalyticsSection.jsx";
import BusinessImpact  from "./components/BusinessImpact.jsx";
import TechStack       from "./components/TechStack.jsx";
import Conclusion      from "./components/Conclusion.jsx";
import Footer          from "./components/Footer.jsx";

export default function App() {
  return (
    <div style={{ background: "#050408", color: "#fff", fontFamily: "'Outfit',sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Overview />
      <KPISection />
      <InsightsSection />
      <AnalyticsSection />
      <BusinessImpact />
      <TechStack />
      <Conclusion />
      <Footer />
    </div>
  );
}
