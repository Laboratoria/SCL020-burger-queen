
import { Routes, Route } from "react-router-dom";
import './App.css';
import Welcome from "./views/1welcome.js";
import Login from "./views/2login.js";
import Menu from "./views/3ViwGarMenu.js";
import Cocina from  "./views/4viewKit.js";
import Delivery from "./views/5viewGarDelv";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cocina" element={<Cocina />} />
        <Route path="delivery" element={<Delivery />} />
      </Routes>
    </div>
  );
}



export default App;
