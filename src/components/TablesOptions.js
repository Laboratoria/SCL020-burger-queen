import React, { useContext } from 'react';
import { DataTable } from '../data/DataTable';
import { OrderContext } from '../context/OrderContext';
function TablesOptions () {
    const { addItemToOrder } = useContext(OrderContext)
return(
    <>
    {DataTable.map((product, i) => (
            <div className='buttonOptions' key={i}>
                <button onClick={() => addItemToOrder(product)} className="drinkButton">{product.name}</button>
            </div>
        ))
    }
    </>
)
}
export default TablesOptions;