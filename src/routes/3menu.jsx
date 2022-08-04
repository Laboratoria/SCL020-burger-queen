import React from "react";
import { Link } from "react-router-dom";


import "./3menu.css";
import menuVegetariano from "../Data/menuVegetariano.json";
import MenuCarnes from "../Data/menuCarnes.json";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Menu = () => {
  console.log("####", menuVegetariano);
  const data = [
    {
      label: "Menú Vegetariano",
      value: "MenuVegetariano",
    },
    {
      label: "Menú Carnes",
      value: "MenuCarnes",
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
      <Tabs value="MenuVegetariano">
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
                  <img src={item.img} alt="" />
                  <span class="price">{item.price}</span>
                </div>
              ))}
              ;
            </div>
          </TabPanel>

          <TabPanel key={"MenuCarnes"} value={"MenuCarnes"}>
            <div class="cont-card">
              {MenuCarnes.map((item) => (
                <div class="card">
                  <h3>{item.name}</h3>
                  <img src={item.img} alt="" />
                  <span class="price">{item.price}</span>
                </div>
              ))}
              ;
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
export default Menu;
