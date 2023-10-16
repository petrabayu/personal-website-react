import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-wrapper">
          <HeroSectionLeft />
          <HeroSectionRight />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
