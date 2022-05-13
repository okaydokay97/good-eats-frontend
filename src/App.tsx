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



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
        <Navbar/>
          <Routes>
            <Route path='/home' element={<Welcome/>}/>
            <Route path='/' element={<Navigate replace to ='/home'/>}/>
            <Route path='/menu' element={<Menu/>} />
            <Route path='/order' element={<Order/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
