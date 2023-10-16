import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-content-container">
              <h1>If you can dream it,</h1>
              <div className="footer-container-flex">
                <h1>you can do it</h1>
                <a href="">
                  <button>
                    <span>MORE ABOUT ME</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <h1>CONTACT ME</h1>
            <div className="contact-icon">
              <a
                href="mailto:petrabayu19@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#e23647" }}
                  />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/petra-bayu-pangestu-32b17b137/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "##0077b7" }}
                  />
                </i>
              </a>
              <a
                href="https://www.instagram.com/petra_bayu/"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#a253e1" }}
                  />
                </i>
              </a>
              <a
                href="https://github.com/petrabayu"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FontAwesomeIcon icon={faGithub} style={{ color: "#000" }} />
                </i>
              </a>
              <a
                href="https://wa.me/08970960939"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#2ab13f" }}
                  />
                </i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
