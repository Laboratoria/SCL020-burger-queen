import React, { useState } from "react";
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
  const [list, setList] = useState([]);
  const [sum, setSum] = useState(0);

  const cardClick = (value) => {
    console.log("Detectando click", value);
    // esta variable me devuelve en un array la cantidad de duplicados 
    let duplicate = list.filter((item) => item.id === value.id);
    if (duplicate.length === 0) {
      value.counter = 1;
      setList([...list, value]);
      console.log("value.precio ", value.precio, value.counter);
      //el precio lo multiplico por el contador, y asi se el precio 
      let sumaClick = value.price * value.counter;
      setSum(sum + sumaClick);
    }
  };

  // funcion para restar
  const less = (id) => {
    let update = list.map((item) => {
      if (item.id === id) {
        item.counter -= 1;
        return item;
      }
      return item;
    });
    setList(update);
    sumTotal();
  };
  const more = (id) => {
    let update = list.map((item) => {
      if (item.id === id) {
        item.counter += 1;
        return item;
      }
      return item;
    });
    setList(update);
    sumTotal();
  };

  const remove = (id) => {
    let update = list.filter((item) => item.id !== id);
    setList(update);
    sumTotal();
  };

  const sumTotal = () => {
    let suma = 0;
    list.map((item) => {
      suma += item.price * item.counter;
    });
    console.log(suma, "sumaaa", list);
    setSum(suma);
  };
  return (
    <>
      {/* elementos html aun no funcionan, deben redireccionar */}
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
      {/* componente botones menú */}
      {/* componentes de tailwind: es una tabla de 1x3 */}

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
            <div className="cont-card">
              {menuVegetariano.map((item, key) => (
                <div
                  className="card"
                  key={key + 1}
                  onClick={() => cardClick(item)}
                >
                 
                    <h3>{item.name}</h3>
                    <div className="fotoMenu">
                    <img className="dish" src={item.img} alt="" />
                    </div>
                    <span className="price">{item.price}</span>
                  
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel key={"MenuCarnes"} value={"MenuCarnes"}>
            <div className="cont-card">
              {MenuCarnes.map((item, key) => (
                <div
                  className="card"
                  key={key + 1}
                  onClick={() => cardClick(item)}
                >
                  <h3>{item.name}</h3>
                  <div className="fotoMenu">
                    <img className="dish" src={item.img} alt="" />
                    </div>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel key={"MenuAgregados"} value={"MenuAgregados"}>
            <div className="cont-card">
              {MenuAgregados.map((item, key) => (
                <div
                  className="card"
                  key={key + 1}
                  onClick={() => cardClick(item)}
                >
                  <h3>{item.name}</h3>
                  <div className="fotoMenu">
                    <img className="dish" src={item.img} alt="" />
                    </div>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>

      <br />
      <br />
      <br />

      <section className="section-menu">
        <table className="table-menu">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Sub total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index + 1}>
                  
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{list[index].price * list[index].counter} </td>
                  <td>
                    <div className="counter">
                      <button onClick={() => less(item.id)}>
                        <img
                          src="https://i.postimg.cc/hPydq8tr/menos.png"
                          alt=""
                         
                        />
                      </button>
                      <span>{item.counter}</span>
                      <button onClick={() => more(item.id)}>
                        <img
                          src="https://i.postimg.cc/x8kSNSLq/mas.png"
                          alt=""
                        />
                      </button>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => remove(item.id)}>
                      <img
                        src="https://i.postimg.cc/NG86ZrXJ/eliminar.png"
                        alt=""
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <hr />
        <br />
        <div className="total">
          <h4>Total:</h4>
          <span>{sum}</span>
        </div>
        <br />
        <div className="options">
          <a className="btn" href="">
            COCINAR
          </a>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};

    
export default Menu;