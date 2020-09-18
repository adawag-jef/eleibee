import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  REGISTRATION_ERROR,
  LOGOUT,
} from "../types";

export const login = (user, history) => async (dispatch) => {
  try {
    const response = await axios.post("/api/user/login", user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    history.push("/admin");
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: "Invalid credentials",
    });
  }
};

export const register = (user, history) => async (dispatch) => {
  try {
    await axios.post("/api/user/register", user);
    dispatch(
      login({ username: user.username, password: user.password }, history)
    );
    // history.push("/login");
  } catch (error) {
    dispatch({
      type: REGISTRATION_ERROR,
      payload: error.response.data.message.msgBody,
    });
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    const response = await axios.get("/api/user/logout");
    dispatch({
      type: LOGOUT,
      payload: response.data,
    });
    history.push("/login");
  } catch (error) {
    console.log("LOGOUT FAILED");
  }
};

export const isAuthenticated = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/user/authenticated");
    dispatch({
      type: AUTHENTICATE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: AUTHENTICATE_FAILED,
    });
  }
};
