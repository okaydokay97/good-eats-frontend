import 'bootstrap/dist/css/bootstrap.min.css'


import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate
} from 'react-router-dom'
import Welcome from './Components/Welcome'
import Navbar from './Navigation/Navbar';
import Menu from './Components/Menu'
import Order from './Components/Order'
import Header from'./Components/Header'
import Login from './Components/Login';
import Signup from './Components/Signup'
import Checkout from './Components/Checkout';
import RestaurantSearch from './Components/RestaurantSearch';
import { useSelector } from 'react-redux';
import {State} from './state'





function App() {

  const selectedRestaurant = useSelector((state:State) => state.restaurant).id
  return (
    <div className="App">
      <Router>
      <Header />
        <div>
          {selectedRestaurant? <Navbar/> : null}
          <Routes>
            <Route path={`/${selectedRestaurant}/home`} element={<Welcome/>}/>
            <Route path='/' element={<RestaurantSearch />}/>
            <Route path={`/${selectedRestaurant}/menu`} element={<Menu/>} />
            <Route path={`/${selectedRestaurant}/order`} element={<Order/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path={`/${selectedRestaurant}/checkout`} element={<Checkout/>} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
