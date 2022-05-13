import  { Action, RestaurantInfo } from '../actions'
import { ActionType } from '../actionTypes'


const initialState: RestaurantInfo = {
  id: 0,
  restaurantName: '',
  cuisine:[],
  menu: [{}],
  address:'',
  pictures: '',
  deliver:false,
  adminUserId:0
}


const restaurantReducer = (state: RestaurantInfo = initialState, action: Action) => {
  switch (action.type){
    case ActionType.ADDRESTAURANT:
      return action.payload
    case ActionType.REMOVERESTAURANT:
      return initialState
    default:
      return state
  }
}

export default restaurantReducer