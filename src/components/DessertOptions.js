import React, { useContext } from 'react';
import  {DataDesserts}  from '../data/DataDessert';
import { OrderContext } from '../context/OrderContext';

function DessertOptions () {
    const { addItemToOrder } = useContext(OrderContext)
return(
  
    <>
    {DataDesserts.map((product, i) => (
            <div className='buttonOptions' key={i}>
                <button onClick={() => addItemToOrder(product)} className="dessertButton">{product.name}</button>
            </div>
        ))
    }
    </>
   
)

}

export default DessertOptions;
