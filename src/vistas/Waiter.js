import React from 'react';
import HeaderW from '../components/HeaderW.js'
import OrderBox from '../components/OrderBox.js';
import ShowMenuButton from '../components/MenuButtons.js';



function Waiter () {
    /* hola chicas */
    return (

        <>
        <orderProvider>
        <HeaderW/>
        
        <ShowMenuButton/>
        <OrderBox/>
        <button className='sendToKitchen'>Enviar a cocina</button>
        </orderProvider>
        </>
    )

}

export default Waiter