export interface OrderInfo {
  id: number,
  description: {food:string, price:number, quantity:number}[],
  date: Date,
  price: number,
  userId: number,
  restaurantId: number
}

let order1 = {
  id: 1,
  description: [{food: 'bruschetta', price:7.00, quantity:2}],
  price: 14.00,
  userId:2,
  restaurantId: 1
}