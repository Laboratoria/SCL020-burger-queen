import React from 'react';

function Buttons(props) {
    return (
       
             <button className='btnHome' {...props.className} >{props.name}</button>
             
    );
}

export default Buttons;