import {Link} from "react-router-dom";
const Menu= () => {
    return (
      <>
        <main>
          <div className="btnGrupo">
          <button className="mesas">1</button>
          <button className="mesas">2</button>
          <button className="mesas">3</button>
          <button className="mesas">4</button>
          </div>
          <div className="nameClient">
          <input placeholder="Nombre del cliente"/>
          </div >
          <div className="menu">
          <button className="btnMenu">Menú vegetariano</button>
          
          <button className="btnMenu">Menú de carnes</button>
          <button className="btnMenu">Agregados</button>
          </div>
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
  