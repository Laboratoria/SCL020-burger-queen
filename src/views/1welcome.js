import {Link} from "react-router-dom";
function Welcome() {
    return (
      <>
        <main>
           <button>Continuar</button>
        </main>
        <nav>
          <Link to="/login">Bienvenido</Link>
        </nav>
      </>
    );
  }
  export default Welcome