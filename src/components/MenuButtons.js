import React, { useState } from "react";
import TablesOptions from "./TablesOptions.js";
import VegTablesOptions from "./VegTablesOptions.js";
import DrinksOptions from "./DrinksOptions.js";
import DessertOptions from "./DessertOptions.js";
//import { Link } from 'react-router-dom';
function ShowMenuButton() {
  const menuButtons = ["Tablas", "Tablas Veg", "Bebestibles", "Postres"];
  const [selected, setSelected] = useState("");
  return (
    <>
      <div className="menuOptions">
        {selected === "Tablas" && <TablesOptions />}
        {selected === "Tablas Veg" && <VegTablesOptions />}
        {selected === "Bebestibles" && <DrinksOptions />}
        {selected === "Postres" && <DessertOptions />}
      </div>
      <div className="menuButtons">
        {menuButtons.map((menuButton) => (
          <button
            type="button"
            key={menuButton}
            className={"menuButton"}
            onClick={() => setSelected(menuButton)}
          >
            {menuButton}
          </button>
        ))}
      </div>
    </>
  );
}
export default ShowMenuButton;