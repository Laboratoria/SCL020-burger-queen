import React from 'react';

function OrderBox({ orderProducts }) {
    return (
        <>
        <div className='orderBox'>
        {orderProducts.map((element) => { 
            return (
              <p className='orderProduct'  key={`${element.length}`}><span className = 'productName' >{element.name}</span>{element.price}</p> 
            )
          })}
        </div>
        </>
    );
}

export default OrderBox;