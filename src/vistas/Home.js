import React from 'react';
import Buttons from '../components/Buttons.js';
import { Link} from "react-router-dom";
import Waiter from './Waiter.js';
//import Waiter from './Waiter.js';
//import Logo from '../components/Logo';

function Home() {
    return (
        <div className='P'>
        <Link to= "/waiter"> 
          <Buttons name="Garzón"/>
          </Link>
          <Link to="/kitchen">
         <Buttons name="Cocina"/>
         </Link>
           
        </div>
    );
}

export default Home;