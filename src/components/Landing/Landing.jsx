import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landing}>
      <button className={style.boton}>
        <Link to="/home">
          <img
            className={style.imagen}
            src="https://i.imgur.com/rut28Ly.gif"
            alt=""
          />
        </Link>
      </button>
      <h1 className={style.text}>hint: try entering the portal</h1>
    </div>
  );
};

export default Landing;
