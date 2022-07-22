import React from 'react';
import { Link } from 'react-router-dom';

function HeaderW () {
return(
    <header className="waiterHeader">
        <h1>Mesa</h1>
        <button className= "tables">1</button>
        <button className= "tables">2</button>
        <button className= "tables">3</button>
        <button className= "tables">4</button>
        <button className= "tables">5</button>
        <Link to="/tablesState">
        <button className= "check">check</button>
        </Link>
    </header>
)

}

export default HeaderW;