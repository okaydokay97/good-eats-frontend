import { Action } from "../actions";
import { ActionType } from "../actionTypes";

const initialState:string = ''

const filterReducer = (state: string = initialState, action:Action) => {
  switch(action.type) {
    case ActionType.ADDFILTER:
      return action.payload
    case ActionType.REMOVEFILTER:
      return initialState
    default:
      return state
  }
}

export default filterReducer