import React from 'react'

export function Command({order}) {
  return (
    <div className='command'>
        <h2>Mesa {order.mesa}</h2>
    {order.items.map((item) => (
        
         <div>{item.amount} {item.name}</div>
         

    ))}
   
    </div>
  )
}
