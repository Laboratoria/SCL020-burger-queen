import {Link} from "react-router-dom";
function Login() {
    return (
      <>
        <main>
           <input  placeholder="E-mail"></input>
           <input  placeholder="contraseña"></input>
           <input  placeholder="Nombre"></input>
        </main>
        <nav>
          <Link to="/menu">Ingresar</Link>
        </nav>
      </>
    );
  }
  export default Login