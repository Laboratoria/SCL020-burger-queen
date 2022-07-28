import React from 'react';
import { DataTable } from '../data/DataTable';
function TablesOptions () {
return(
    <>
    {DataTable.map((product, i) => (
            <div className='buttonOptions' key={i}>
                <button onClick={() => console.log(product)} className="drinkButton">{product.name}</button>
            </div>
        ))
    }
    </>
)
}
export default TablesOptions;