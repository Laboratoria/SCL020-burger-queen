import React from 'react';
import  {DataDesserts}  from '../data/DataDessert';

function DessertOptions () {
return(
  
    <>
    {DataDesserts.map((product, i) => (
            <div className='buttonOptions' key={i}>
                <button onClick={() => console.log(product)} className="dessertButton">{product.name}</button>
            </div>
        ))
    }
    </>
   
)

}

export default DessertOptions;
