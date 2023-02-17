import {
  GET_CHARACTERS,
  CHARACTER_DETAIL,
  UPDATE_INPUT_VALUE,
  SELECT_CHARACTER,
} from "./action-types";

const initialState = {
  characters: [],
  characterDetail: {},
  inputValue: "",
  searchResults: [],
  selectedCharacter: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { ...state, characters: action.payload };
    case CHARACTER_DETAIL:
      return { ...state, characterDetail: action.payload };
    case UPDATE_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case SELECT_CHARACTER:
      return {
        ...state,
        selectedCharacter: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
