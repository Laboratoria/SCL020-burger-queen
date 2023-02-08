import React, { createContext, useState } from "react";

const SelectionCommand = createContext();
export const SelectionProvider = ({ children }) => {
  const [elect, setElect] = useState([]);
  const [count, setCount] = useState(0);

  const addProduct = (product) => {
    const isProduct = elect.some(item => item.id === product.id);
    if (isProduct) {
      const updateElect = elect.map(item => {
        if (item.id === product.id) {
          return { ...item, count: ++item.count };
        }
        return item;
      });
      setElect(updateElect);
    } else {
      setElect([...elect, { ...product, count: 1 }]);
    }
  };





return (
    <SelectionCommand.Provider
        value= {{ setElect, addProduct, setCount, setCount}}
        >
      {children}
    </SelectionCommand.Provider>
  );
};


export default SelectionCommand;



