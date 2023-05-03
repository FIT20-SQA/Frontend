import { Login } from "./pages/Login";
import Homapage from "./pages/Homepage/";


import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const route = window.location.pathname;

  return (
    <div className="App">

      { !route.startsWith('login') && <Navbar />}
      <Routes>
      <Route path="/" element={<Homapage />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
