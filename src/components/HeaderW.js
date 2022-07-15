import React from 'react';
import Buttons from '../components/Buttons.js';
//import { Link } from 'react-router-dom';

function HeaderW () {
return(
    <header>
        <h1>Mesa</h1>
        <Buttons name= "1"/>
        <Buttons name= "2"/>
        <Buttons name= "3"/>
        <Buttons name= "4"/>
        <Buttons name= "5"/>
        <Buttons name= "Check"/>

    </header>
)

}

export default HeaderW;