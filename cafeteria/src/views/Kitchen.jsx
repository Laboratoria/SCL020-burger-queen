import React, { useEffect, useContext } from 'react'
import Clock from '../components/Clock'
import { OrderKitchen } from '../components/OrderKitchen'
import { OrdersContext } from '../context/ordersContext.jsx'
import { collection, doc, updateDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { ButtonSignOut } from '../components/ButtonSignOut'

export function Kitchen() {

  const { orders, getOrders } = useContext(OrdersContext)

  useEffect(() => { getOrders() }, [])


  const handleReady = async (id) => {
    const confirmAlert = confirm('¿Enviar a salón?');
    if (confirmAlert === true) {
      const allOrders = await getDocs(collection(db, "orders"));
      allOrders.forEach((item) => {
        if (item.data().orderId == id) {
          updateDoc(doc(db, "orders", item.id), {
            estado: "Listo"
          })
        }
      })
    }
  }

  return (
    <div className="bg-zinc-50 h-screen w-screen">
      <header className="flex justify-between">
        <ButtonSignOut />
        <Clock />
      </header>
      <main className="flex justify-around m-10 flex-wrap">
        {orders.map((order) => (
          order.estado === "Preparando" &&
          <OrderKitchen handleReady={handleReady} order={order} />
        ))}
      </main>
    </div>
  )
}
