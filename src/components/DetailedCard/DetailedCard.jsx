import style from "./DetailedCard.module.css";
import { Link } from "react-router-dom";

export default function DetailedCard(props) {
  return (
    <div className={style.card}>
      <div className={style.botonera}>
        <Link to={`/home`}>
          <button className={style.button}>X</button>
        </Link>
        <button className={style.buttonFav}>♥</button>
      </div>
      <Link to={`/detail/${props.id}`}>
        <h2 className={style.cardTextNombre}>{props.name}</h2>
        <img className={style.imagen} src={props.image} alt="" />
        <h2 className={style.cardText}>{props.species}</h2>
        <h2 className={style.cardText}>{props.gender}</h2>
        <h2>{props.status}</h2>
      </Link>
    </div>
  );
}
