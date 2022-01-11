import { ReactComponent as GithubIcon } from "assets/img/github-logo.svg";
import "./styles.css";

const NavBar = (): JSX.Element => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/gabrieloswaldo"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-github-container">
              <GithubIcon />
              <p className="dsmovie-github-link">/gabrieloswaldo</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
