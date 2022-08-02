import React from "react";
import { Link } from "react-router-dom";
import Table from "../Components/Common/tables.jsx";
import Menus from "../Components/Common/menu.jsx";
import Card from "../card/card.jsx";

const Menu = () => {
  return (
    <>
      <div className="nameClient">
        {/* value name mesero */}
        <Table />         {/* numero mesas */}
      </div >
      <div className="menu">
        <Menus />
      
      </div>
      <Card/>
      {/* <Card title={"Lomo Saltado"} image={".src/"} price={"2500"} />
      <Card title={"Lomo Saltado"} image={".src/"} price={"2500"} />
      <Card title={"Lomo Saltado"} image={".src/assets/logo.png"} price={"2500"} /> */}
      <nav className="btnSendOrderF">
        <div className="btnSendOrderCh">
          <Link to="/cocina">Enviar pedido a cocina</Link>
        </div>
      </nav>
    </>
  );
}
export default Menu
