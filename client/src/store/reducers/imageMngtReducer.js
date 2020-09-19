import { FETCH_IMAGES, UPLOADING } from "../types";

const initialState = {
  images: [],
  percentage: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case UPLOADING:
      return {
        ...state,
        percentage: action.payload,
      };
    default:
      return state;
  }
};
