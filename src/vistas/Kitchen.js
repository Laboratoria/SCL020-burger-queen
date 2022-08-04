import React, {useEffect, useState} from "react";
import TitlesHeader from "../components/TitlesHeader";
import { db,  collection } from '../firebase';
import {Command} from '../components/Command'
import { onSnapshot,
    doc,
    query,
    orderBy} from 'firebase/firestore'


function Kitchen() {

    const [orders, setOrders] = useState([])

    const callbackO = (data) => {
        return setOrders(data.docs.map((order) => {
            return ({ ...order.data() })
          }))
    }
        // data.docs.map((order) => {
        //     console.log(data.docs)
        // })
        // console.log(data)
        // }
   
     useEffect (() => {
        const updatingPublications = () => {
            const q = query(collection(db, "waitersOrders"));
            onSnapshot(q, callbackO);
          };
          updatingPublications()

    }, [])
    console.log(orders)
    // console.log(orders[0].items[0].name)
orders.map((order, i) => (
    order.items.map((item) => (
        console.log(item)
    ))
))
    return(
        <>
<TitlesHeader title = 'Cocina'/>
<div className = 'kitchenCommandsArea'>

  {orders.map((order, i) => (
    <Command order = {order}/>
   
        ))}
</div>
</>
    )
}
export default Kitchen