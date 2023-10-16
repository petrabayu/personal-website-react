import "./HobbiesSection.css";
import gymImage from "./images/gym.jpg";
import playGamesImage from "./images/play-games.jpg";
import readBookImage from "./images/read-book.jpg";

function HobbiesSection() {
  return (
    <>
      <section id="hobbies" className="hobbies">
        <div className="hobbies-wrapper">
          <div className="hobbies-container">
            <div className="content">
              <h1>HOBBIES</h1>
            </div>
          </div>

          <div className="hobbies-container">
            <div
              className="hobbies-content"
              style={{ backgroundImage: `url(${gymImage})` }}
            >
              <div className="hobby-title">
                <h1>EXERCISING</h1>
              </div>
            </div>
            <div
              className="hobbies-content"
              style={{ backgroundImage: `url(${playGamesImage})` }}
            >
              <div className="hobby-title">
                <h1>PLAYING VIDEO GAMES</h1>
              </div>
            </div>
            <div
              className="hobbies-content"
              style={{ backgroundImage: `url(${readBookImage})` }}
            >
              <div className="hobby-title">
                <h1>READING BOOKS</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HobbiesSection;
