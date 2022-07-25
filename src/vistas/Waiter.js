import React from 'react';
import HeaderW from '../components/HeaderW.js'
import OrderBox from '../components/OrderBox.js';
import MenuList from '../components/MenuList.js';
import { MenuData } from '../data/MenuData'

function Waiter () {
    return (
        <>
        <HeaderW/>
        <MenuList MenuData={MenuData}/>
        <OrderBox/>
        <button className='sendToKitchen'>Enviar a cocina</button>
        </>

    )
}
export default Waiter