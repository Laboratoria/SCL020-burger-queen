import React from 'react';
import HeaderW from '../components/HeaderW.js'
<<<<<<< HEAD
import MenuList from '../components/MenuList.js';
import { MenuData } from '../data/MenuData'
import OrderBox from '../components/OrderBox'
import { useState } from "react";
=======
import OrderBox from '../components/OrderBox.js';
import ShowMenuButton from '../components/MenuButtons.js';
>>>>>>> hibrido



function Waiter () {
<<<<<<< HEAD
    const [orderProducts, setOrderProducts] = useState([])

    const creatingOrder = (name, price, id) => {
        const array = [...orderProducts, {name, price, id}]
        setOrderProducts(array)
        console.log(array)
    }

=======
    
>>>>>>> hibrido
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