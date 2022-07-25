import { Routes, Route } from "react-router-dom";
import Home from "./routes/1home.jsx";
import Login from "./routes/2login.jsx";
import Menu from "./routes/3menu.jsx"
import Cocina from "./routes/4cocina.jsx";
import Delivery from "./routes/5delivery.jsx";
import './App.css'

const App= () => {
 

  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="menu" element={<Menu />} />
        <Route path="cocina" element={<Cocina />} />
        <Route path="delivery" element={<Delivery />} />
      </Routes>
    </div>
  )
}

export default App