import React from "react"
import {BrowserRouter} from "react-router-dom";
import TitlesHeader from "../components/TitlesHeader";
function Kitchen() {
    return(
        <>
<TitlesHeader title = 'Cocina'/>
<div className = 'kitchenCardsArea'></div>
</>
    )
}
export default Kitchen