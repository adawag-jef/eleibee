import axios from "axios";
import {
  FETCH_COLLECTION,
  ADD_COLLECTION,
  REMOVE_COLLECTION,
  EDIT_COLLECTION,
} from "../types";

export const fetchCollection = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/card-collections");
    dispatch({
      type: FETCH_COLLECTION,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const postCollection = (collection, success, fail) => async (
  dispatch
) => {
  try {
    const response = await axios.post("/api/card-collections", collection);
    dispatch({ type: ADD_COLLECTION });
    success(response.data);
    dispatch(fetchCollection());
  } catch (error) {
    fail(error);
  }
};

export const removeCollection = (img_id, success, fail) => async (dispatch) => {
  try {
    const response = await axios.delete(`/api/card-collections/${img_id}`);
    dispatch({ type: REMOVE_COLLECTION });
    success(response.data);
    dispatch(fetchCollection());
  } catch (error) {
    fail(error);
  }
};

export const editCollection = (collection) => (dispatch) => {
  dispatch({ type: EDIT_COLLECTION, payload: collection });
};

export const updateCollection = (collection, success, fail) => async (
  dispatch
) => {
  try {
    const response = await axios.put(
      `/api/card-collections/${collection._id}`,
      {
        image: collection.image._id,
        price: collection.price,
      }
    );
    success(response.data);
    dispatch(fetchCollection());
  } catch (error) {
    fail(error);
  }
};
