import React, { useContext } from 'react';
import menu from '../Data/data.json';

const Card = ({ props }) => {
  // const { addDish } = useContext(SelectionContext);
  const filterMenu = menu.menu.filter((element) => {
    return element.type === props;
  });
  return (
    <div className="cardContainer">
      {filterMenu.map((item, index) => (
        <div className="cardMenuElements" key={index} onClick={() => addDish(item)}>
          <img className="cardMenu-img" scr={item.img} alt="dish img" />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
        </div>
      ))}
</div>
      );
  };
export default Card;  