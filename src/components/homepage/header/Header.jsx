import "./Header.css";

function Header() {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-wrapper">
        <div className="navbar-container">
          <a className="logo" href="./index.html">
            PETRA BAYU P.
          </a>
        </div>
        <div className="navbar-container">
          <ul id="list-pages" className="list-pages">
            <li className="page">
              <a href="">ABOUT</a>
            </li>
            <li className="page">
              <a href="">PORTFOLIO</a>
            </li>
            <li className="page">
              <a href="">BOOKS</a>
            </li>
          </ul>
        </div>
        <div className="navbar-container">
          <a href="https://wa.me/08970960939" target="_blank" rel="noreferrer">
            <button className="btn">LETS TALK</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
