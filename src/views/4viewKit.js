import {Link} from "react-router-dom";
function Cocina() {
    return (
      <>
        <main>
          <h2>Cocina</h2>
          
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </main>
        <nav>
          <Link to="/delivery">Pedidos listos</Link>
        </nav>
      </>
    );
  }
  export default Cocina