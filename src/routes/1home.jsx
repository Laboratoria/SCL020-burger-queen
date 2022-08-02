import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/lemons.png';


// Buscar template login/register - icons chef - mesero



const Home = () => {
  return (
    <>
      <div className="home">
        <div class="logo">
          <img src={logo} alt="logo" />
          <h1 className="textLogo">Lemon Restaurant </h1>
        </div>
        <div className="btnHome">
            {/* Boton continuar nos lleva al login con click o */}
            <Link to="/login" className="btnlogin">Ingresar</Link>
            {/* Boton continuar nos lleva al login con click o */}
            <Link to="/register" className="btnregister">Crear Cuenta</Link>
        </div>
        {/* icon mesero -> menu
        icon chef -> chef */}
      </div>
    </>
  );
};
export default Home;
//
//
