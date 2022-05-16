export type Food = {course:string, name:string, price:number}[]
export type Foods = {name:string, price:number}[]

export interface RestaurantMenu {[course: string]: Foods}

export interface MenuItemInterface {
  appetizers: Food,
  pastas: Food,
  pizzas: Food,
  desserts: Food
}

export interface RestaurantInfo {
  id: number,
  restaurantName: string,
  cuisine: string[],
  menu: RestaurantMenu,
  address: string,
  pictures?: string,
  deliver:boolean,
  adminUserId:number
}

export let restaurant1: RestaurantInfo ={
  id:1,
  restaurantName: 'Mama Mia Pizzaria',
  cuisine: ['Pizza', 'Italian'],
  menu: {
    'Appetizers': [
      {name: 'Bruschetta', price: 6.50},
      {name: 'Calamari', price: 12.00},
      {name: 'Fried Mozzerela', price: 8.25},
      {name: 'Garlic Bread', price: 6.50},
      {name: 'Onion Rings', price: 7.50},
      {name: 'Fried Mushrooms', price: 8.00}
    ],
    'Pastas': [
      {name: 'Cacio é pepe', price: 10.25},
      {name: 'Meat Lasagna', price: 13.50},
      {name: 'Cheese Ravioli', price: 12.00},
      {name: 'Penne Pasta W/ Grilled Italian Sausage', price: 14.50},
      {name: 'Sphagetti and Meatballs', price: 11.25}
    ],
    'Pizzas': [
      {name: 'Margherita', price: 16.00},
      {name: 'Four Cheese', price: 17.00},
      {name: 'Hawaiian', price: 19.25},
      {name: 'Chicago Style', price: 18.50},
      {name: 'White Pizza', price: 14.50},
      {name: 'Vegitarian', price: 15.00}
    ],
    'Desserts': [
      {name: 'Cannoli(6)', price: 6.00},
      {name: 'Tiramisu', price: 7.00},
      {name: 'Chocolate Cake', price: 8.25},
      {name: 'Vanilla Gelato', price: 6.50},
    ]
  }
  ,
  address: '123 Main St.',
  deliver:false,
  adminUserId: 1
}


export let restaurant2:RestaurantInfo = {
  id:2,
  restaurantName: 'Ramen Party',
  cuisine: ['Asian', 'Ramen'],
  menu: {
    'Shareables': [
      {name: 'Takoyaki', price: 7.50},
      {name: 'Chicken Kaarage', price: 11.00},
      {name: 'Shrimp Tempura', price: 13.50},
      {name: 'Fried Kabocha', price: 5.00}
    ],
    'Ramen': [
      {name: 'Shio', price: 12.25},
      {name: 'Shoyu', price: 14.50},
      {name: 'Tonkotu', price: 12.70},
      {name: 'Miso', price: 14.50},

    ],
    'Sides': [
      {name: 'Rice', price: 3.00},
      {name: 'Extra Noodles', price: 4.00},
      {name: 'Miso Soup', price: 4.75},
      {name: 'Kimchi', price: 4.50},
    ]
  }
  ,
  address: '672 N Broadway Ave.',
  deliver:false,
  adminUserId: 1

}