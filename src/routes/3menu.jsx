import {Link} from "react-router-dom";
import Button from "../Components/Common/button";
import Card from "../card/card";

const Menu= () => {
    return (
      <>
        <main>
          <div >
           <Button label={1}/>
           <Button label={2}/>
           <Button label={3}/>
           <Button label={4}/>
           <Button label={5}/>
          </div>
          
          <div className="nameClient">
          <input placeholder="Nombre del cliente"/>
          </div >
          <div className="menu">
          <button className="btnMenu">Menú vegetariano</button>
          
          <button className="btnMenu">Menú de carnes</button>
          <button className="btnMenu">Agregados</button>
          </div>
          <Card title={"Lomo Saltado"} image={".src/"} price={"2500"}/>
          <Card title={"Lomo Saltado"} image={".src/"} price={"2500"}/>
          <Card title={"Lomo Saltado"} image={".src/assets/logo.png"} price={"2500"}/>
        </main>
        <nav className="btnSendOrderF">
          <div className="btnSendOrderCh">
           <Link to="/cocina">Enviar pedido a cocina</Link>
           </div>
        </nav>
      </>
    );
  }
  export default Menu
  