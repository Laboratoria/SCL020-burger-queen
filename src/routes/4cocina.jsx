import {Link} from "react-router-dom";
import Card2 from "../card/card2";
const Cocina= () => {
    return (
      <>
        <main>
          <Card2 item= {"papas"}/>
        </main>
        <nav>
          <Link to="/delivery">Pedidos listos</Link>
        </nav>
      </>
    );
  }
  export default Cocina