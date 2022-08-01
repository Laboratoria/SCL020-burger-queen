import React from 'react';
import HeaderW from '../components/HeaderW.js'
import ShowMenuButton from '../components/MenuButtons.js';
import { OrderProvider } from '../context/OrderContext.js';
function Waiter () {
    /* hola chicas */
    return (
        <>
        <OrderProvider>
        <HeaderW/>
        <ShowMenuButton/>
        
        <button className='sendToKitchen'>Enviar a cocina</button>
        </OrderProvider>
        </>
    )
}
export default Waiter