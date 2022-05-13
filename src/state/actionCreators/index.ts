import { ActionType } from "../actionTypes"
import { RestaurantInfo } from "../actions"
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