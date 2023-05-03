import { Login } from "./pages/Login";
import AdminHomepage from "./pages/Homepage/AdminHomepage";
import StaffHomepage from "./pages/Homepage/StaffHomepage";


import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const route = window.location.pathname;

  return (
    <div className="App">

      { !route.startsWith('login') && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/staff" element={<StaffHomepage />} />
      </Routes>
    </div>
  );
}
export default App;
