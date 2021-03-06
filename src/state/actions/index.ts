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
  name: string,
  cuisine: string[],
  menu:{[course: string]: Food},
  address: string,
  picture: string,
  deliver:boolean,
  adminUserId:number
}

export interface User {
  id: number,
  email: string,
  name: string,
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

interface ClearItemsFromCartAction{
  type: ActionType.CLEARITEMSFROMCART,
}

interface AddUserAction {
  type: ActionType.ADDUSER
  payload: User
}

interface RemoveUserAction {
  type: ActionType.REMOVEUSER
}

interface AddFilterAction{
  type: ActionType.ADDFILTER
  payload: string
}

interface RemoveFilterAction{
  type: ActionType.REMOVEFILTER
}

export type Action = (
  AddRestaurantAction | 
  RemoveRestaurantAction |
  AddItemToCartAction | 
  RemoveItemFromCartAction |
  ClearItemsFromCartAction |
  AddUserAction |
  RemoveUserAction |
  AddFilterAction |
  RemoveFilterAction
)

