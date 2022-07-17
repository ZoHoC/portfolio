import logo from "../images/logo.svg";

export default function Header(props) {
  const navToggle = props.toggle ? "nav-open" : "";
  const colorChange = props.toggle ? "hamburger light" : "hamburger";

  return (
    <header className={navToggle}>
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="logo" className="home__logo" />
        </a>
      </div>
      <button className="nav-toggle display" aria-label="toggle navigation" onClick={props.handleClick}>
        <span className={colorChange}></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link display" onClick={props.handleClick}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={props.handleClick}>
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link" onClick={props.handleClick}>
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a href="#social" className="nav__link" onClick={props.handleClick}>
              Social
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
