import React from "react";
import Card from "../../card/card";
import SelectionCommand from "../../Commands/commands";

const Menus = () => {
    return (
        
        <div>
            <button className="btnMenu">Menú vegetariano</button>
            <button className="btnMenu">Menú de carnes</button>
            <button className="btnMenu">Agregados</button>
            <Card/>
        </div>

        
        
    )
}

export default Menus;