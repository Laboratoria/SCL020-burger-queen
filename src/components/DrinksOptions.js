import React, { useContext } from 'react';
import { DataDrinks } from '../data/DataDrinks';
import { OrderContext } from '../context/OrderContext';


const DrinksOptions = () => {
    const { addItemToOrder } = useContext(OrderContext)
    return (
        <>
        {DataDrinks.map((product, i) => (
                <div className='buttonOptions' key={i}>
                    <button onClick={() => addItemToOrder(product)} className="drinkButton">{product.name}</button>
                </div>
            ))
        }
        </>

    )

}

export default DrinksOptions;
