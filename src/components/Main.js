import placeholderImg from "../images/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <main>
      {/* Introduction */}
      <section aria-labelledby="intro" className="intro" id="home">
        <div className="section__div--intro">
          <p className="above_title">Luka Matić</p>
          <h1 id="intro" className="section__title section__title--intro">
            Front-End Developer
          </h1>
          <nav aria-label="secondary navigation" className="section__nav--intro">
            <ul className="nav__list--intro">
              <li className="nav__item--intro">
                <a href="#work" className="nav__link--intro">
                  Projects
                </a>
              </li>
              <li className="nav__item--intro">
                <a href="#" className="nav__link--intro">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Projects */}
      <section aria-labelledby="selected-projects" className="my-work" id="work">
        <div className="section__div--work">
          <p className="above_title">Projects</p>
          <h2 id="selected-projects" className="section__title">
            My work
          </h2>
        </div>

        <div className="projects">
          <a href="#" className="projects__item">
            <img src={placeholderImg} alt="" className="projects__img" />
          </a>
          <a href="#" className="projects__item">
            <img src={placeholderImg} alt="" className="projects__img" />
          </a>
          <a href="#" className="projects__item">
            <img src={placeholderImg} alt="" className="projects__img" />
          </a>
          <a href="#" className="projects__item">
            <img src={placeholderImg} alt="" className="projects__img" />
          </a>
        </div>
      </section>

      <section aria-labelledby="contact-me" className="contact" id="social">
        <p className="above_title">Need a Developer?</p>
        <h2 id="contact-me" className="section__title section__title--contact">
          Get in contact <FontAwesomeIcon icon={faArrowRightLong} className="contact__icon" />
        </h2>
      </section>
    </main>
  );
}
