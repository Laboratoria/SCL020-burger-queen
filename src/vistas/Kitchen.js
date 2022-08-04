import React, {useEffect} from "react";
import TitlesHeader from "../components/TitlesHeader";
import { db,  collection } from '../firebase';
import { onSnapshot,
    doc,
    query,
    orderBy} from 'firebase/firestore'


function Kitchen() {
   
     useEffect (() => {
        const updatingPublications = () => {
            const q = query(collection(db, "waitersOrders"));
            // console.log(q)
            onSnapshot(q, callback);
          };
          updatingPublications()

    }, [])
    const callback = (data) => {
        data.docs.map((order) => {
            console.log(data.docs)
        })
        console.log(data)
        }
    

    return(
        <>
<TitlesHeader title = 'Cocina'/>
<div className = 'kitchenCardsArea'>
  
    
</div>
</>
    )
}
export default Kitchen