import style from "./SearchBar.module.css";
import DetailedCard from "../DetailedCard/DetailedCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  characterDetail,
  updateInputValue,
  selectedCharacter,
} from "../../redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue);
  const searchResults = useSelector((state) => state.searchResults);

  useEffect(() => {
    dispatch(updateInputValue());
  }, []);

  const handleSearch = () => {
    if (searchResults.length > 0) {
      dispatch(selectedCharacter(searchResults[0]));
    }
  };

  return (
    <div className={style.container}>
      <input
        value={inputValue}
        className={style.buscar}
        type="search"
        placeholder="search for an ID number"
        onChange={(e) => dispatch(updateInputValue(e.target.value))}
      />
      <button className={style.btn} onClick={handleSearch}>
        <img
          className={style.image}
          src="https://w0.peakpx.com/wallpaper/244/435/HD-wallpaper-portal-morty-rick.jpg"
          alt=""
        />
      </button>
      {searchResults.map((character) => (
        <div key={character.id}>{character.name}</div>
      ))}
      {selectedCharacter && <DetailedCard character={selectedCharacter} />}
    </div>
  );
}
