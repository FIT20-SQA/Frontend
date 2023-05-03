import { Login } from "./pages/Login";
import Homapage from "./pages/Homepage";
import MovieViewAllPage from './pages/Movie/ViewAllPage'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom"
import "./App.css";
function App() {
  const route = window.location.pathname;
  return (
    <div className="App">

      { !route.startsWith('/login') && <Navbar />}
      <Routes>

        <Route path="/" element={<Homapage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/movies' element={<MovieViewAllPage />} />
      </Routes>
    </div>
  );
}
export default App;
