import React from 'react';
import Buttons from '../components/Buttons.js';
import { Link } from "react-router-dom";


//import Waiter from './Waiter.js';
//import Logo from '../components/Logo';



function Home() {
    return (
        <div className="BodyHome">
            <div className='ContainerHome'>
                <img className='imgHome' alt="logo-home" src="../imagenes/logo-Shonagai.png"></img>
                <div className='ContainerButtons'>
                    <Link to="/waiter">
                        <Buttons className='btn-waiter' name="Garzón" />
                    </Link>
                    <Link to="/kitchen">
                        <Buttons className='btn-Kitchen' name="Cocina" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;