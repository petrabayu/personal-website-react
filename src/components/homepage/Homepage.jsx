import Footer from "./footer/Footer";
import Header from "./header/Header";
import HeroSection from "./hero-section/HeroSection";
import HobbiesSection from "./hobbies-section/HobbiesSection";
import PortfolioSection from "./portfolio-section/PortfolioSection";
import SkillsSection from "./skills-section/SkillsSection";
import "./Homepage.css";

function Homepage() {
  return (
    <>
      <div id="main-container">
        <div id="content-container">
          <Header />
          <HeroSection />
          <PortfolioSection />
          <SkillsSection />
          <HobbiesSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homepage;
