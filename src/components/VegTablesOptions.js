import React from 'react';
import { DataTableVg } from '../data/DataTableVg';
function VegTablesOptions () {
return(
    <>
    {DataTableVg.map((product, i) => (
            <div className='buttonOptions' key={i}>
                <button onClick={() => console.log(product)} className="vegTableButton">{product.name}</button>
            </div>
        ))
    }
    </>
)
}
export default VegTablesOptions;