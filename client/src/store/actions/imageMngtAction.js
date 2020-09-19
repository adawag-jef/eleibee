import axios from "axios";
import { DELETE_IMAGE, FETCH_IMAGES, UPLOADING } from "../types";

export const fetchImages = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/image");
    dispatch({
      type: FETCH_IMAGES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteImage = (img_id, success, fail) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_IMAGE });
    await axios.delete(`/api/image/${img_id}`);
    dispatch(fetchImages());
    success();
  } catch (err) {
    fail(err);
  }
};

export const uploadImage = (file, success, fail) => async (dispatch) => {
  const formData = new FormData();
  formData.append("sampleFile", file);

  try {
    const res = await axios.post("/api/image/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        dispatch({
          type: UPLOADING,
          payload: parseInt(
            Math.round(progressEvent.loaded * 100) / progressEvent.total
          ),
        });
        //clear percentage
        setTimeout(() => {
          dispatch({ type: UPLOADING, payload: 0 });
        }, 2000);
      },
    });
    dispatch(fetchImages());
    success();
  } catch (err) {
    if (err.response.status === 500) {
      fail("There was a problem with the server");
    } else {
      fail(err.response.data);
    }
  }
};
