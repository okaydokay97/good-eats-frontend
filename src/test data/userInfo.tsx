export interface User {
  id: number,
  email: string,
  password: string,
  admin: boolean
}

let user1:User = {
  id: 1,
  email: 'alex@gmail.com',
  password: 'abc123',
  admin: true
}

let user2:User = {
  id: 2,
  email: 'bob@gmail.com',
  password: 'computer',
  admin: false
}