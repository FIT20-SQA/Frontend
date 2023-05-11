import { Login } from "./pages/Login";
import Homapage from "./pages/Homepage";
import MovieViewAllPage from './pages/Movie/ViewAllPage'
import MovieViewDetailPage from './pages/Movie/ViewDetails'
import TheaterRoomViewAllPage from './pages/TheaterRoom/ViewAllPage'
import FoodDrinkViewAllPage from './pages/FoodDrink/ViewAllPage'
import StaffViewAllPage from './pages/Staff/ViewAllPage'
import OrderCreatePage from './pages/Order/CreatePage'
import UserProfilePage from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//TODO: create a context to store information about user including: name, avatar and role?
//TODO: refactor itemImage -> image
function App() {
  const route = window.location.pathname;
  return (
    <div className="App">

      {!route.startsWith('/login') && <Navbar />}
      <div className='app-container'>
        <Routes>

          <Route path="/" element={<Homapage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/movies' element={<MovieViewAllPage />} />
          <Route path='/movies/:id' element={<MovieViewDetailPage />} />
          <Route path='/theater-rooms' element={<TheaterRoomViewAllPage />} />
          <Route path='/foods-and-drinks' element={<FoodDrinkViewAllPage />} />
          <Route path='/create-order' element={<OrderCreatePage />} />
          <Route path='/staffs' element={<StaffViewAllPage />} />
          <Route path='/profile' element={<UserProfilePage />} />
        </Routes>
      </div>

    </div>
  );
}
export default App;
