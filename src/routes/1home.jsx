import { Link } from "react-router-dom";
// const logo = require.context ('../../assets/img', true);

const Home = () => {
  

  return (
    <>
      <div class="home">
        <main>

          <div class="title">
          {/* <img src={logo (`./lemons.png'`)} /> */}
            <h1 className="text-3xl font-bold underline">Lemon Restaurant </h1>
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
// 
// 