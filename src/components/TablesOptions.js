import React from 'react';
import Hola from './Hola';

function TablesOptions () {
return(
  
    <div className='tablesOptionContainer'>
        <button className="tableButton" onClick={<Hola/>}>Tadakimasu</button>
        <button className= "tableButton">Okaeri</button>
        <button className= "tableButton">Ue</button>
    </div>
   
)

}

export default TablesOptions;