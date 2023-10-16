import ae from "./icon/after-effects.png";
import bootstrap from "./icon/bootstrap.png";
import css from "./icon/css-3.png";
import figma from "./icon/figma.png";
import github from "./icon/github.png";
import html from "./icon/html.png";
import illustrator from "./icon/illustrator.png";
import js from "./icon/js.png";
import photoshop from "./icon/photoshop.png";
import premierPro from "./icon/premiere-pro.png";
import react from "./icon/react.png";
import unity from "./icon/unity.png";

function SkillsSectionRight() {
  return (
    <>
      <div className="skills-container">
        <div className="skills-content">
          <div className="icon">
            <img className="png-icon" src={html} alt="html.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={css} alt="css-3.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={js} alt="js.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={github} alt="github.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={figma} alt="figma.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={bootstrap} alt="bootstrap.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={react} alt="react.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={unity} alt="unity.png" />
          </div>

          <div className="icon">
            <img className="png-icon" src={ae} alt="after-effects" />
          </div>
          <div className="icon">
            <img className="png-icon" src={premierPro} alt="premiere-pro.png" />
          </div>
          <div className="icon">
            <img className="png-icon" src={photoshop} alt="photoshop.png" />
          </div>
          <div className="icon">
            <img
              className="png-icon"
              src={illustrator}
              alt=" illustrator.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsSectionRight;
