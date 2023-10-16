import PortfolioSectionLeft from "./PortfolioSectionLeft";
import PortfolioSectionRight from "./PortfolioSectionRight";
import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <>
      <section id="portfolio">
        <div className="portfolio-wrapper">
          <PortfolioSectionLeft />
          <PortfolioSectionRight />
        </div>
      </section>
    </>
  );
}

export default PortfolioSection;
