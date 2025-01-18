import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantReducer from "./reducers/restaurantReducer";

import cartReducer from "./reducers/cartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  restaurantReducer,
  cartReducer,
});
// applyMiddleware herhangi arayazılımı redux'a dahil etmeye yarar. burada thunk 'ı dahil etmek için kullanıldı

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
