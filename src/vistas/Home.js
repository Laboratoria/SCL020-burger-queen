import React from 'react';
import Buttons from '../components/Buttons.js';
import { Link } from "react-router-dom";


//import Waiter from './Waiter.js';
//import Logo from '../components/Logo';



function Home() {
    return (
        <div className="BodyHome">
                <div className='ContainerButtons'>
                <img className='imgHome' alt="logo-home" src="../imagenes/logo-Shonagai.png"></img>
                    <Link to="/waiter">
                        <Buttons className='btn-waiter' name="GARZÓN" />
                    </Link>
                    <Link to="/kitchen">
                        <Buttons className='btn-Kitchen' name="COCINA" />
                    </Link>
                </div>
        </div>
    );
}

export default Home;