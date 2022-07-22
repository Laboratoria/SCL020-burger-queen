import React from 'react';
import HeaderW from '../components/HeaderW.js'
import {BrowserRouter} from "react-router-dom";
import MenuButtons from '../components/MenuButtons.js';
import OrderBox from '../components/OrderBox.js';
import ShowMenuButton from '../components/MenuButtons.js';

function Waiter () {
    return (
        <>
        <HeaderW/>
        <ShowMenuButton/>
        <OrderBox/>
        <button className='sendToKitchen'>Enviar a cocina</button>
        </>

    )
}
export default Waiter