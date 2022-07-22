import React from 'react';
import logo from '../assets/cafeLogo.png';
import chefIcon from '../assets/chefIcon.png';
import waiterIcon from '../assets/waiterIcon.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="cafe logo" />
      <input type="text" placeholder="Server´s name" />
      <div className="btn-container">
        <Link to="/Chef" className='toView' onClick={() => console.log("clicking chef btn")}>
            <img className="main-icons" src={chefIcon} alt="chef icon" />
        </Link>

        <Link to="/Waiter" className='toView' onClick={() => console.log("cliking waiter btn")}>
            <img className="main-icons" src={waiterIcon} alt="waiter icon" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
