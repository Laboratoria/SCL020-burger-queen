import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/1home.jsx";
import Login from "./routes/2login.jsx";
import Menu from "./routes/3menu.jsx";
import Chef from "./routes/4chef.jsx";
import Delivery from "./routes/5delivery.jsx";
import "./App.css";
import { SelectionProvider } from "./Commands/commands.jsx";

const App = () => {
  return (
    <SelectionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route path="chef" element={<Chef />} />
          <Route path="delivery" element={<Delivery />} />
        </Routes>
      </Router>
    </SelectionProvider>
  );
};

export default App;
