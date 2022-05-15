import { combineReducers } from "@reduxjs/toolkit";
import restaurantReducer from "./restaurantReducer";
import cartReducer from './cartReducer'


const reducers = combineReducers({
  restaurant: restaurantReducer,
  cart: cartReducer
})

export default reducers

export type State = ReturnType<typeof reducers>