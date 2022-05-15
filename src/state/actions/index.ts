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

export interface User {
  id: number,
  email: string,
  password: string,
  admin: boolean
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

interface AddUser {
  type: ActionType.ADDUSER
  payload: User
}

interface RemoveUser {
  type: ActionType.REMOVEUSER
}

export type Action = (
  AddRestaurantAction | 
  RemoveRestaurantAction |
  AddItemToCartAction | 
  RemoveItemFromCartAction |
  AddUser |
  RemoveUser
)

