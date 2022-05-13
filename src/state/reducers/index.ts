import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantReducer";

const reducers = combineReducers({
  restaurant: restaurantReducer
})

export default reducers