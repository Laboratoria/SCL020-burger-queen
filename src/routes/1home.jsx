import {Link} from "react-router-dom";
const Home= () => {
    return (
      <>
      <div class= "home">
        <main>
         
          <div class="title">
            <h1 className="text-3xl font-bold underline">Burger Queen </h1>
            </div>
            <div class="subtitle">
            <p>Food ordering App</p>
            </div>
            
        </main>
        <nav class="btnIngresar">
          {/* Boton continuar nos lleva al login con click o */}
          <Link to="/login">Ingresar</Link>
        </nav>
        <nav class="btnRegistrar">
          {/* Boton continuar nos lleva al login con click o */}
          <Link to="/login">Registrar</Link>
        </nav>
        </div>
      </>
    );
  }
  export default Home
