import React from 'react'
import { addDoc } from 'firebase/firestore';
import { db, collection } from '../firebase';

export function Command({order, i}) {

  const readyToServe = async (e) => {
    const container = e.target.parentNode.parentNode
    container.removeChild(e.target.parentNode)
    console.log(e.target.parentNode)
    try { await addDoc(collection(db, "readyToServe"), {
            mesa: order.mesa,
            items: order.items,
            id: i,
            estatus: 'listo'
          });
    } catch (error) {
        console.error("Error adding document: ");
    } 
    
}


  return (
    <div className='command'>
        <h2>Mesa {order.mesa}</h2>
    {order.items.map((item) => (
        
         <div>{item.amount} {item.name}</div>
         
    ))}
    <button onClick={readyToServe} className='ready'>Listo</button>
   
    </div>
  )
}
