import React from 'react';
import { useState } from 'react';
function OrderBox() {
    const [addDetalls, setAddDetalls] = useState('');
    return (
        <div className='orderBox'>
            <textarea className="form-control" placeholder='Observaciones' value={addDetalls}
                                onChange={(e) => setAddDetalls(e.target.value)}
                            ></textarea>
        </div>
    );
}
export default OrderBox;