import { Action, User } from "../actions"
import { ActionType } from "../actionTypes"

const initialState: User = {
  id: 0,
  email: '',
  name: '',
  password: '',
  admin: false
}

const userReducer = (state: User = initialState, action: Action) => {
  switch(action.type){
    case ActionType.ADDUSER:
      return action.payload
    case ActionType.REMOVEUSER:
      return initialState
    default:
      return state
  }
}

export default userReducer
