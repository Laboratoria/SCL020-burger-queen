import React from 'react';

function Buttons({name}) {
    return (
        <div>
             <button  type={ name==='Crear Pedido'? 'submit' : 'button'}>{name}</button>
             
        </div>
    );
}

export default Buttons;