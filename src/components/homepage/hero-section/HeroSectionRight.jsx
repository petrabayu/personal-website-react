import photoProfile from "./photo-profile.jpeg";
function HeroSectionRight() {
  return (
    <>
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${photoProfile})` }}
      >
        <div className="img-content"></div>
      </div>
    </>
  );
}

export default HeroSectionRight;
