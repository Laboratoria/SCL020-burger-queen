import React from 'react';
import { Link } from 'react-router-dom';

function HeaderW () {
return(
    <header className="waiterHeader">
        <h1>Mesa</h1>
        <button className= "table1">1</button>
        <button className= "table2">2</button>
        <button className= "table3">3</button>
        <button className= "table4">4</button>
        <button className= "table5">5</button>
        <Link to="/tablesState">
        <button className= "check">check</button>
        </Link>
    </header>
)

}

export default HeaderW;