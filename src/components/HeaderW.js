import React from 'react';
import { Link } from 'react-router-dom';
import ItemTable from './ItemTable';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../context/OrderContext';

const HeaderW = () => {
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

return(
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
    {orderItems && tableOpen && (
        <div className='prueba'>
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
        </>
)

}


export default HeaderW;