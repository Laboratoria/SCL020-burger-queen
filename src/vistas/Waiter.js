import React from 'react';
import HeaderW from '../components/HeaderW.js'
import MenuList from '../components/MenuList.js';
import { MenuData } from '../data/MenuData'
import OrderBox from '../components/OrderBox'
import { useState } from "react";

function Waiter () {
    const [orderProducts, setOrderProducts] = useState([])

    const creatingOrder = (name, price, id) => {
        const array = [...orderProducts, {name, price, id}]
        setOrderProducts(array)
        console.log(array)
    }

    return (
        <>
        <HeaderW/>
        <MenuList MenuData={MenuData} creatingOrder= {creatingOrder}/>
        <OrderBox orderProducts= {orderProducts}/>
        <button className='sendToKitchen'>Enviar a cocina</button>
        </>

    )
}
export default Waiter