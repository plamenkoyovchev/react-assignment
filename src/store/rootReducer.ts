import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import itemsReducer from "./items/itemsReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  items: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
