import React from 'react';
import { DataDrinks } from '../data/DataDrinks';


const DrinksOptions = () => {
    return (
        <>
        {DataDrinks.map((product, i) => (
                <div className='buttonOptions' key={i}>
                    <button onClick={() => console.log(product)} className="drinkButton">{product.name}</button>
                </div>
            ))
        }
        </>

    )

}

export default DrinksOptions;