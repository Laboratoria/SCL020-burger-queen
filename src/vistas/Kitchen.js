import React from "react";
import TitlesHeader from "../components/TitlesHeader";
import { db,  collection } from '../firebase';
import { onSnapshot,
    doc,
    query,
    orderBy} from 'firebase/firestore'

function Kitchen() {

    const updatingPublications = (callback) => {
        const q = query(collection(db, "waitersOrders"), orderBy("Time", "desc"));
        console.log(collection)
        onSnapshot(q, callback);
      };
updatingPublications()

    return(
        <>
<TitlesHeader title = 'Cocina'/>
<div className = 'kitchenCardsArea'>
  <h1>{doc}</h1>
    
</div>
</>
    )
}
export default Kitchen