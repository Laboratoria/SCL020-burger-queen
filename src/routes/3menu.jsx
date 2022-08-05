import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./3menu.css";
import menuVegetariano from "../Data/menuVegetariano.json";
import MenuCarnes from "../Data/menuCarnes.json";
import MenuAgregados from "../Data/menuagregados.json";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Menu = () => {
  const [count, setCount] = useState(0);
  const data = [
    {
      label: "Menú Vegetariano",
      value: "MenuVegetariano",
    },
    {
      label: "Menú Carnes",
      value: "MenuCarnes",
    },
    {
      label: "Menú Agregados",
      value: "MenuAgregados",
    },
  ];
  return (
    <>
      <header>
        <ul>
          <li>
            <a href="">Servir</a>
          </li>
          <li>
            <a href="">Perfil</a>
          </li>
          <li>
            <a href="">Cerrar sesión</a>
          </li>
        </ul>
      </header>
      <Tabs value="Menu">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel key={"MenuVegetariano"} value={"MenuVegetariano"}>
            <div class="cont-card">
              {menuVegetariano.map((item) => (

               <div class="card">
                  <h3>{item.name}</h3>
                  <img class="dish" src={item.img} alt="" />
                  <span class="price">{item.price}</span>
                </div>
              ))}
             
            </div>
          </TabPanel>

          <TabPanel key={"MenuCarnes"} value={"MenuCarnes"}>
            <div class="cont-card">
              {MenuCarnes.map((item) => (
                <div class="card">
                  <h3>{item.name}</h3>
                  <img class="dish" src={item.img} alt="" />
                  <span class="price">{item.price}</span>
                </div>
              ))}
              
            </div>
          </TabPanel>

          <TabPanel key={"MenuAgregados"} value={"MenuAgregados"}>
            <div class="cont-card">
              {MenuAgregados.map((item) => (
                <div class="card">
                  <h3>{item.name}</h3>
                  <img class="dish" src={item.img} alt="" />
                  <span class="price">{item.price}</span>
                </div>
              ))}
              
            </div>
            </TabPanel>
        </TabsBody>
      </Tabs>

      <nav>
          <Link to="/delivery">Pedidos listos</Link>
        </nav>
    </>
  );
};
export default Menu


// import React, { useState } from 'react';
//  2:
//  3:  function Example() {
  //  const [count, setCount] = useState(0);
//  4:    const [count, setCount] = useState(0);
//  5:
//  6:    return (
//  7:      <div>
//  8:        <p>You clicked {count} times</p>
//  9:        <button onClick={() => setCount(count + 1)}>
// 10:         Click me
// 11:        </button>
// 12:      </div>
// 13:    );
// 14:  }