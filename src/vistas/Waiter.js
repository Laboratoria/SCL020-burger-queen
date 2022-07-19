import React from 'react';
import HeaderW from '../components/HeaderW.js'
import {BrowserRouter} from "react-router-dom";
import MenuButtons from '../components/MenuButtons.js';
import OrderBox from '../components/OrderBox.js';
import Buttons from '../components/Buttons.js';

function Waiter () {
    return (
        <>
        <HeaderW/>
        <div className='menuOptions'></div>
        <MenuButtons/>
        <OrderBox/>
        <button className='sendToKitchen'>Enviar a cocina</button>
        </>
    )
}
export default Waiter