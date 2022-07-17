import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer__contact">
        <span className="footer__title">Contact infromation:</span>
        <span className="footer__text">Feel free to reach out to me any time.</span>
        <span className="footer__text">
          E:{" "}
          <a href="mailto:matic.luka.p@gmail.com" className="footer__link">
            matic.luka.p@gmail.com
          </a>
        </span>
      </div>
      <div className="social__div">
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://www.linkedin.com/in/luka-mati%C4%87-520aa2244/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>

          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com/ZoHoC" target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <img src={logo} alt="logo" className="copyright__logo" />
        <span>© 2022 Luka Matić</span>
      </div>
    </footer>
  );
}
