import { Link } from "react-router-dom";
// const logo = require.context ('../../assets/img', true);

const Home = () => {
  return (
    <>
      <div class="home">
        <main>
          <div class="title">
             <img className="logo" src="./src/assets/img/lemons.png" alt="" /> 
            <h1 className="text-3xl font-bold underline">Lemon Restaurant </h1>
          </div>
          
        </main>

        <div className="containerHome">
          <nav class="btnIngresar">
            {/* Boton continuar nos lleva al login con click o */}
            <Link to="/login">Ingresar</Link>
          </nav>
          <nav class="btnRegistrar">
            {/* Boton continuar nos lleva al login con click o */}
            <Link to="/login">Registrar</Link>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Home;
//
//
