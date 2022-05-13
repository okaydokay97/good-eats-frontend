import { ActionType } from '../actionTypes/index' 

type Food = {name:string, price:number}[]

export interface RestaurantInfo {
  id: number,
  restaurantName: string,
  cuisine: string[],
  menu: [
    {[course: string]: Food}
  ],
  address: string,
  pictures?: string,
  deliver:boolean,
  adminUserId:number
}

interface AddRestaurantAction {
  type: ActionType.ADDRESTAURANT,
  payload: RestaurantInfo
}

interface RemoveRestaurantAction {
  type: ActionType.REMOVERESTAURANT
}
export type Action = AddRestaurantAction | RemoveRestaurantAction

