import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function PortfolioSectionRight() {
  return (
    <>
      <div className="portfolio-container">
        <div className="portfolio-content">
          <ul className="portfolio-list">
            <li className="portfolio">
              NUTRIKID LANDING PAGE
              <a
                href="https://nutrikid-test-page.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </li>
            <li className="portfolio">
              BMI CALCULATOR
              <a
                href="https://hitung-bmi.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </li>
            <li className="portfolio">
              PLANT WEBSITE DUPLICATE
              <a
                href="https://static-homepage-design.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </li>
            <li className="portfolio">
              (COMING SOON)
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </li>
            <li className="portfolio">
              (COMING SOON)
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </li>
            <li className="portfolio">
              (COMING SOON)
              <span>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PortfolioSectionRight;
