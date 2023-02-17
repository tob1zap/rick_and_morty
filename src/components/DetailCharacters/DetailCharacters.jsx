import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { characterDetail } from "../../redux/actions.js";
import Card from "../Card.jsx";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const character = useSelector((state) => state.characterDetail);
  useEffect(() => {
    dispatch(characterDetail(id));
  }, []);
  return (
    <div>
      {
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
        ></Card>
      }
    </div>
  );
};
export default CharacterDetail;
