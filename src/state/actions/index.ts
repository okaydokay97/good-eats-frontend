import { ActionType } from '../actionTypes/index' 

type Food = {name:string, price:number}[]

export type Cart = {
  [key:string]: {
    quantity: number,
    price: number,
  }
}

export interface RestaurantInfo {
  id: number,
  restaurantName: string,
  cuisine: string[],
  menu:{[course: string]: Food},
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

interface AddItemToCartAction{
  type: ActionType.ADDITEMTOCART
  payload: Cart
}

interface RemoveItemFromCartAction{
  type: ActionType.REMOVEITEMFROMCART,
  payload: Cart
}
export type Action = AddRestaurantAction | RemoveRestaurantAction | AddItemToCartAction | RemoveItemFromCartAction

