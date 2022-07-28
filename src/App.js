//import logo from './logo.svg';
//import './App.css';
import Home from './vistas/Home.js';
import Waiter from './vistas/Waiter.js';
import Kitchen from './vistas/Kitchen.js';
import * as React from "react";
import { Route,Routes } from "react-router-dom";
import TablesState from './vistas/TablesState.js';



//COMPONENTE FUNCIONAL
function App() {
  return (


<Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="/waiter" element={<Waiter/>}></Route>
        <Route path="/kitchen" element={<Kitchen/>}></Route>
        <Route path="/tablesState" element={<TablesState/>}></Route>   
</Routes>


 )
}
export default App;

/*<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
      <Route path='/Menu' element={ <Waiter />} />
      <Route path='/Cook' element={ <Kitchen />} />
</Routes>
</BrowserRouter>*/
