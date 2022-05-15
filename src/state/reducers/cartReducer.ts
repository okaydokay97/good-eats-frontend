import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { Action, Cart } from "../actions"
import { ActionType } from "../actionTypes"





const initialState:Cart = {}

const cartReducer = (state: Cart = initialState, action: Action ): Cart => {

  switch(action.type) {
    case ActionType.ADDITEMTOCART:
      return {...state, ...action.payload}
    case ActionType.REMOVEITEMFROMCART:
      return {...state, ...action.payload}
    default:
    return state
  }


}

export default cartReducer