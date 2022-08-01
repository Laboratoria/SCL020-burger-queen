import React, { useState } from 'react'
import { Product } from '../components/Product'
import { menu } from '../data'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { useEffect } from 'react';
//actualizar arreglo segun horario
//Enviar orden a diner y a kitchen
//setear arreglo menu selected:false - setear checkbox

export function RestMenu({ selectedTable }) {

    console.log(selectedTable)

    const [food, setFood] = useState(menu);
    const [clear, setClear] = useState(false);
    const order = [];


    const unique = Array.from(new Set(menu.map(item => item.category)));
    const toggleProduct = (name) => {
        const newMenu = [...food];
        const product = newMenu.find((product) => product.name === name);
        product.selected = !product.selected;
        setFood(newMenu);
    };

    const handleSendOrder = () => {
        const confirmAlert = confirm('¿Enviar a cocina?');
        if (confirmAlert === true) {
            console.log(selectedTable.selectedTable.number)
            const products = menu.filter((product) => product.selected);
            addDoc(collection(db, 'orders'), {
                date: Timestamp.fromDate(new Date()),
                table: selectedTable.selectedTable.number,
                products,
                //meserx: "",
                //observaciones:"",
            })
            //setClear(true)

        }
    }


    const handleClikCategory = (e) => {
        const cat = e.currentTarget;
        const panel = cat.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }

    return (
        <div className="w-screen flex flex-col">
            {unique.map((category) => (
                <div className="w-2/5 self-center">
                    <button className="accordion" onClick={handleClikCategory} key={category}>{category}</button>
                    <div className="panel">
                        {food.map((product) =>
                            product.category === category ?
                                <div>
                                    {/* {console.log(food)} */}
                                    <input className="check" type="checkbox" onChange={() => { toggleProduct(product.name) }} checked={product.selected} ></input>
                                    <span className="product-name">{product.name}</span>
                                    <span>${product.price}</span>
                                </div>
                                : null
                        )}
                    </div>
                </div>
            ))}
            <button className="bg-gray-500 hover:bg-blue-700  text-white font-bold py-2 px-2 rounded w-24" onClick={() => { handleSendOrder() }}>Enviar</button>
            <div>has sleccionado {JSON.stringify(menu.filter((product) => product.selected))}</div>
        </div>
    )
}

{/* <div className="panel">
<input className="check" type="checkbox" onChange={handleCheck} checked={product.selected}></input>
<span className="product-name">{product.name}</span>
<p>${product.price}</p>
</div> */}
{/* <div className="flex self-center justify-self-center		items-center	justify-center	outline-1 max-w-md mx-auto rounded overflow-hidden shadow-lg" >
<div className=" rounded overflow-hidden shadow-lg"> */}



