import { ActionType } from "../actionTypes"
import { RestaurantInfo, Cart, User } from "../actions"
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

export const clearItemsFromCart = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEARITEMSFROMCART
    })
  }
}

export const addUser = (user: User) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADDUSER,
      payload: user
    })
  }
}

export const removeUser = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVEUSER
    })
  }
}