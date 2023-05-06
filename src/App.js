import { Login } from "./pages/Login";
import Homapage from "./pages/Homepage";
import MovieViewAllPage from './pages/Movie/ViewAllPage'
import TheaterRoomViewAllPage from './pages/TheaterRoom/ViewAllPage'
import FoodDrinkViewAllPage from './pages/FoodDrink/ViewAllPage'
import StaffViewAllPage from './pages/Staff/ViewAllPage'

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import "./App.css";
// create a context to store information about user including: name, avatar and role?
function App() {
  const route = window.location.pathname;
  return (
    <div className="App">

      { !route.startsWith('/login') && <Navbar />}
      <Routes>

        <Route path="/" element={<Homapage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/movies' element={<MovieViewAllPage />} />
        <Route path='/theater-rooms' element={<TheaterRoomViewAllPage />} /> 
        <Route path='/foods-and-drinks' element={<FoodDrinkViewAllPage />} /> 
        <Route path='/staffs' element={<StaffViewAllPage />} /> 
        
      </Routes>
    </div>
  );
}
export default App;
