import React, { useContext } from 'react';
import { DataTableVg } from '../data/DataTableVg';
import { OrderContext } from '../context/OrderContext';
function VegTablesOptions () {
    const { addItemToOrder } = useContext(OrderContext)
return(
    <>
    {DataTableVg.map((product, i) => (
            <div className='buttonOptions' key={i}>
                <button onClick={() => addItemToOrder(product)} className="vegTableButton">{product.name}</button>
            </div>
        ))
    }
    </>
)
}
export default VegTablesOptions;