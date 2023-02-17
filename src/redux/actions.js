import {
  GET_CHARACTERS,
  CHARACTER_DETAIL,
  UPDATE_INPUT_VALUE,
  SELECT_CHARACTER,
} from "./action-types";

export const getCharacters = () => {
  return function (dispatch) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTERS, payload: data.results })
      );
  };
};
export const characterDetail = (id) => {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: CHARACTER_DETAIL, payload: data }));
  };
};
export const updateInputValue = (newValue) => {
  return { type: UPDATE_INPUT_VALUE, payload: newValue };
};
export const selectedCharacter = (character) => {
  return {
    type: SELECT_CHARACTER,
    payload: character,
  };
};
