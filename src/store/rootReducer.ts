import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import itemsReducer from "./items/itemsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
});

export default rootReducer;
