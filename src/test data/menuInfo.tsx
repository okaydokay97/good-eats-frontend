export type Foods = {course: string, name:string, price:number}[]

export interface MenuItemInterface {
  appetizers: Foods,
  pastas: Foods,
  pizzas: Foods,
  desserts: Foods
}

export let menuItems: MenuItemInterface = {
  appetizers: [
    {course:'appetizers', name: 'Bruschetta', price: 6.50},
    {course:'appetizers', name: 'Calamari', price: 12.00},
    {course:'appetizers', name: 'Fried Mozzerela', price: 8.25},
    {course:'appetizers', name: 'Garlic Bread', price: 6.50},
    {course:'appetizers', name: 'Onion Rings', price: 7.50},
    {course:'appetizers', name: 'Fried Mushrooms', price: 8.00}
  ],
  pastas: [
    {course:'pastas', name: 'Cacio é pepe', price: 10.25},
    {course:'pastas', name: 'Meat Lasagna', price: 13.50},
    {course:'pastas', name: 'Cheese Ravioli', price: 12.00},
    {course:'pastas', name: 'Penne Pasta W/ Grilled Italian Sausage', price: 14.50},
    {course:'pastas', name: 'Sphagetti and Meatballs', price: 11.25}
  ],
  pizzas: [
    {course:'pizzas', name: 'Margherita', price: 16.00},
    {course:'pizzas', name: 'Four Cheese', price: 17.00},
    {course:'pizzas', name: 'Hawaiian', price: 19.25},
    {course:'pizzas', name: 'Chicago Style', price: 18.50},
    {course:'pizzas', name: 'White Pizza', price: 14.50},
    {course:'pizzas', name: 'Vegitarian', price: 15.00}
  ],
  desserts: [
    {course:'desserts', name: 'Cannoli(6)', price: 6.00},
    {course:'desserts', name: 'Tiramisu', price: 7.00},
    {course:'desserts', name: 'Chocolate Cake', price: 8.25},
    {course:'desserts', name: 'Vanilla Gelato', price: 6.50},
  ]
}

