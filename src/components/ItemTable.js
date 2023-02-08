import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const ItemTable = ({ item }) => {
    const { deleteItemInOrder, addItemToOrder } = useContext(OrderContext);
    const { id } = item;

return <div>{item.name} <button className="editButtons" onClick={() => addItemToOrder(item)}>+</button> 
<span>{item.amount}</span> 
<button className="editButtons" onClick={() => deleteItemInOrder(item)}>-</button>
</div>;

};

export default ItemTable;