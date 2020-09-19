import { combineReducers } from "redux";
import authReducer from "./authReducer";
import imageMngtReducer from "./imageMngtReducer";

export default combineReducers({
  authReducer,
  imageMngtReducer,
});
