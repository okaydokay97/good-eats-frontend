import { ActionType } from "../actionTypes"
import { RestaurantInfo, Cart } from "../actions"
import { Dispatch } from "redux"
import { Action } from '../actions'


export const addRestaurant = (restaurant: RestaurantInfo) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADDRESTAURANT,
      payload: restaurant
    })
  }
}

export const removeRestaurant = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVERESTAURANT
    })
  }
}

export const addItemToCart = (cart: Cart) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADDITEMTOCART,
      payload: cart
    })
  }
}

export const removeItemFromCart = (cart: Cart) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVEITEMFROMCART,
      payload: cart
    })
  }
}