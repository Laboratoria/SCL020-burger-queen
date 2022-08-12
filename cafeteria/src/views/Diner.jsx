import React, { useEffect, useState, useContext } from 'react'
import { Table } from '../components/Table'
// import { tables } from '../data'
import Clock from '../components/Clock'
import { Order } from '../components/Order'
import { db } from '../firebase/config'
import { collection, doc, updateDoc, getDocs } from 'firebase/firestore'


import { OrdersContext } from '../context/ordersContext.jsx'
import { TablesContext } from '../context/TablesContext.jsx'
import { useNavigate } from "react-router-dom";
import { ButtonSignOut } from '../components/ButtonSignOut'

export const Diner = () => {
    let navigate = useNavigate();
    const { orders, getOrders } = useContext(OrdersContext)
    // const [allTables, setAllTables] = useState(tables) //guarda todas las tables con su estado
    const { allTables, getTables } = useContext(TablesContext)
    console.log(allTables)
    useEffect(() => {
        getOrders()
        getTables()
    }, [])
    const activateTables = (number) => {
        const newTables = [...allTables]
        const newTable = newTables.find((table) => table.number === number);
        newTable.active = true;
        getTables([...newTables]) //pa q se ponga verde
        navigate(`/TableInfo/${number}`)
    }

    const handleDelivery = async (id) => {
        const confirmAlert = confirm('¿Entregado?');
        if (confirmAlert === true) {
            const newOrders = [...orders];
            const order = newOrders.find((order) => order.orderId === id);
            order.estado = "Entregada"
            const allOrders = await getDocs(collection(db, "orders"));
            allOrders.forEach((item) => {
                if (item.data().orderId == id) {
                    updateDoc(doc(db, "orders", item.id), {
                        estado: order.estado
                    })
                }
            })
        }
    }

    return (
        <div className="w-full h-full bg-zinc-50">
            <nav>
                <header className="flex justify-between">
                    <ButtonSignOut />
                    <Clock />
                </header>
            </nav>
            <div className="grid gap-2 grid-cols-3 grid-rows-2 place-items-center w-4/5 p-4 h-2/5  mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {allTables.map((table) =>
                    <div className="w-20 h-20" onClick={() => { activateTables(table.number) }}>
                        <Table table={table} />
                    </div>)}
            </div>
            <div className='bg-gray-300 overflow-auto flex  h-2/6 p-8 w-10/12 py-4 px-3 my-4  mx-auto  shadow-lg rounded-lg '>
                {orders.map((order) => (
                    order.estado !== "Entregada" && order.estado !== "Cerrada" ?
                        <Order handleDelivery={handleDelivery} order={order} /> : null
                ))}
            </div>
        </div >
    )
}

