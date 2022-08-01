import React from 'react';
import ShowMenuButton from '../components/MenuButtons.js';
import ItemTable from '../components/ItemTable';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { Link } from 'react-router-dom';

function Waiter () {
    const [tableOpen, setTableOpen] = useState(false);
const [productsLength, setProductsLength] = useState(0);

const {orderItems} = useContext(OrderContext)

useEffect(() => {
    setProductsLength(
        orderItems.reduce((previous, current) => previous + current.amount, 0)
    );
}, [orderItems]);

const total = orderItems.reduce(
    (previous, current) => previous + current.amount * current.price, 
    0
    );
    
    return (
        <>
        
        <header className="waiterHeader">
        <h1>Mesa</h1>
        <button onClick={() => setTableOpen(!tableOpen)} className= "tables">1</button>
        <button onClick={() => setTableOpen(!tableOpen)} className= "tables">2</button>
        <button className= "tables">3</button>
        <button className= "tables">4</button>
        <button className= "tables">5</button>
        <Link to="/tablesState">
        <button className= "check">check</button>
        </Link>
    </header>
        <ShowMenuButton/>
        {orderItems && tableOpen && (
        <div className='orderBox'>
            <h2>Pedido Mesa</h2>
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
        <button className='sendToKitchen'>Enviar a cocina</button>
        
        </>
    )
}
export default Waiter