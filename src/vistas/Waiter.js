import React from 'react';
import ShowMenuButton from '../components/MenuButtons.js';
import ItemTable from '../components/ItemTable';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { Link } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import { db, collection } from '../firebase';


function Waiter () {
    const [tableOpen, setTableOpen] = useState(false);
const [productsLength, setProductsLength] = useState(0);

const {orderItems} = useContext(OrderContext)
console.log(orderItems)

useEffect(() => {
    setProductsLength(
        orderItems.reduce((previous, current) => previous + current.amount, 0)
    );
}, [orderItems]);


const total = orderItems.reduce(
    (previous, current) => previous + current.amount * current.price, 
    0
    );
    
    
    const handleClick = (newTable) => {
        localStorage.setItem('orderProducts', []);
        setTableOpen(newTable)
    }

    const saveOrder = async (e) => {
        try { await addDoc(collection(db, "waitersOrders"), {
                mesa: tableOpen,
                items: orderItems,
                total: total,
                estatus: 'pendiente'
              });
        } catch (error) {
            console.error("Error adding document: ", e);
        } 
    }


    return (
        <>
        
        <header className="waiterHeader">
        <h1>Mesa</h1>
        <button onClick={() => handleClick(1)} className= "tables">1</button>
        <button onClick={() => handleClick(2)} className= "tables">2</button>
        <button onClick={() => handleClick(3)} className= "tables">3</button>
        <button onClick={() => handleClick(4)} className= "tables">4</button>
        <button onClick={() => handleClick(5)} className= "tables">5</button>
        <Link to="/tablesState">
        <button className= "check">check</button>
        </Link>
    </header>
        <ShowMenuButton/>
        {orderItems && tableOpen && (
        <div className='orderBox'>
            <h2>Pedido Mesa {tableOpen}</h2>
            <h3>Cantidad de Productos: {productsLength}</h3>
            {orderItems.length === 0 ? <p>Agregar productos</p> : (
                <div>
                    {orderItems.map((item, i) => (
                        <ItemTable key={i} item={item} />
                    ))}
                </div>
            )}
            <h2>Total:${total}</h2>
        </div>
        ) }
        <button onClick={()=>saveOrder()} className='sendToKitchen'>Enviar a cocina</button>
        
        </>
    )
}
export default Waiter