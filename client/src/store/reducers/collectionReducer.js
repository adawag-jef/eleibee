import {
  FETCH_COLLECTION,
  ADD_COLLECTION,
  REMOVE_COLLECTION,
  EDIT_COLLECTION,
  UPDATE_COLLECTION,
} from "../types";

const initialState = {
  collections: [],
  currentCollection: { price: 0, image: { value: {}, label: "" } },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    case EDIT_COLLECTION:
      return {
        ...state,
        currentCollection: action.payload,
      };
    case UPDATE_COLLECTION:
      return state;
    case ADD_COLLECTION:
      return state;
    case REMOVE_COLLECTION:
      return state;
    default:
      return state;
  }
};
