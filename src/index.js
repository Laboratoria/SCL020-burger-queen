import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import { OrderProvider } from './context/OrderContext';

//import reportWebVitals from './reportWebVitals';
//COMPONENTE RAÍZ
//ReactDOM.render(<div>Hola Mundo</div>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OrderProvider>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </OrderProvider>
  
);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();*/
