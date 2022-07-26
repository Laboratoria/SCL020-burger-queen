import React from 'react';

function OrderBox({ orderProducts }) {
    return (
        <>
        <div className='orderBox'>
        {orderProducts.map((element) => { 
            return (
              <p  key={`${element.length}`}>{element}</p> 
            )
          })}
        </div>
        </>
    );
}

export default OrderBox;