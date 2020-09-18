import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_FAILED,
  LOGOUT,
  REGISTRATION_ERROR,
} from "../types";
const initialState = {
  user: { username: "", role: "" },
  isAuthenticated: false,
  isLoading: true,
  error_msg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: false,
        error_msg: "",
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error_msg: action.payload,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        error_msg: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: { username: "", role: "" },
        isAuthenticated: false,
        isLoading: false,
        error_msg: "",
      };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        isLoading: false,
      };
    case AUTHENTICATE_FAILED:
      return {
        ...state,
        user: { username: "", role: "" },
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};
