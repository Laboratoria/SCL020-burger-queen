import React from 'react';
import { useState } from 'react';





function OrderBox(props) {
    const [addDetalls, setAddDetalls] = useState('');
    return (
        <div className='orderBox'>
        <div>
        <div className='tableNumber'>Numero de mesa:{props.mesa}</div>
        </div>
        
      
       
    
        <textarea 
        className="form-control" 
        placeholder='Observaciones' 
        value={addDetalls}
        onChange={(e) => setAddDetalls(e.target.value)}
        ></textarea>  
        </div>
    );
}

export default OrderBox;