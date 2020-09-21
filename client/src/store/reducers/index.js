import { combineReducers } from "redux";
import authReducer from "./authReducer";
import imageMngtReducer from "./imageMngtReducer";
import collectionReducer from "./collectionReducer";

export default combineReducers({
  authReducer,
  imageMngtReducer,
  collectionReducer,
});
