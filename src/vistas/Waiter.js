import React from 'react';
import HeaderW from '../components/HeaderW.js'
import OrderBox from '../components/OrderBox.js';
import ShowMenuButton from '../components/MenuButtons.js';



function Waiter () {


    return (

        <>
        <orderProvider>
        <HeaderW/>
        <MenuList MenuData={MenuData} creatingOrder= {creatingOrder}/>
        <OrderBox orderProducts= {orderProducts}/>
        <button className='sendToKitchen'>Enviar a cocina</button>
        </orderProvider>
        </>
    )

}

export default Waiter