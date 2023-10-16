import SkillsSectionLeft from "./SkillsSectionLeft";
import SkillsSectionRight from "./SkillsSectionRight";
import "./SKillsSection.css";

function SkillsSection() {
  return (
    <>
      <section id="skills">
        <div className="skills-wrapper">
          <SkillsSectionLeft />
          <SkillsSectionRight />
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
