import React from 'react';

function Buttons(props) {
    return (
       
             <button {...props.className} >{props.name}</button>
             
    );
}

export default Buttons;