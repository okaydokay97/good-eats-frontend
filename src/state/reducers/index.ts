import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantReducer";
import cartReducer from './cartReducer'
import userReducer from "./userReducer";


const reducers = combineReducers({
  restaurant: restaurantReducer,
  cart: cartReducer,
  user: userReducer
})

export default reducers

export type State = ReturnType<typeof reducers>