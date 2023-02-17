import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { useLocation } from "react-router-dom";
import Landing from "../Landing/Landing";
import { Link } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <Landing />}
      <div>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        <div className={style.container}>
          <Link to="/about">
            <button>ABOUT</button>
          </Link>

          <Link to="/characters">
            <button>CHARACTERS</button>
          </Link>

          <Link to="/home">
            <button>HOME</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
