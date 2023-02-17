import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../../redux/actions.js";
import Card from "../Card.jsx";
import style from "../cards.module.css";

const Characters = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return (
    <div className={style.container}>
      {characters?.map((char) => (
        <Card
          key={char.id}
          name={char.name}
          species={char.species}
          gender={char.gender}
          image={char.image}
          id={char.id}
        ></Card>
      ))}
    </div>
  );
};
export default Characters;
