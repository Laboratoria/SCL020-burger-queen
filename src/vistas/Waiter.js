import React from 'react';
import HeaderW from '../components/HeaderW.js'
import OrderBox from '../components/OrderBox.js';
import ShowMenuButton from '../components/MenuButtons.js';
import { OrderProvider } from '../context/OrderContext.js';
function Waiter () {
    /* hola chicas */
    return (
        <>
        <OrderProvider>
        <HeaderW/>
        <ShowMenuButton/>
        <OrderBox/>
        <button className='sendToKitchen'>Enviar a cocina</button>
        </OrderProvider>
        </>
    )
}
export default Waiter