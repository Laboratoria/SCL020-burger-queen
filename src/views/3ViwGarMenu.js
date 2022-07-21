import {Link} from "react-router-dom";
function Menu() {
    return (
      <>
        <main>
          <button>Menú vegetariano</button>
          <button>Menú de carnes</button>
          <button>Agregados</button>
        </main>
        <nav>
          <Link to="/cocina">Enviar pedido a cocina</Link>
        </nav>
      </>
    );
  }
  export default Menu