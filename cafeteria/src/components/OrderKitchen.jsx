import React, {useState} from 'react'
import { Cronometro } from './Cronometro'
import { ModalConfirm } from './Confirm'

export function OrderKitchen({ order, handleReady }) {
  const[modal, setModal] = useState(false)

  const toggleModal = () =>{
    setModal(!modal)
  }

  const toggleConfirm = (status) => {
    if(status){
      handleReady(order.docId)
    }else{
      toggleModal()
    }
  }

  return (
    <div className="bg-gray-100 flex flex-col m-4 shadow-lg">
      <header className='flex text-base font-bold justify-between m-3 mb-2'>
        <div className="text-center border-8 border-x-gray-100 h-10 w-10 bg-white shadow-lg rounded-lg">{order.table}</div>
        <Cronometro order={order} />
        <ModalConfirm modal={modal} toggleConfirm={toggleConfirm} message={"¿Enviar a salón?"}/>
      </header>

      <div className=" w-60 flex flex-col h-48 justify-between rounded bg-white overflow-auto">
        <div className='flex flex-col'>
          <h1 className="font-bold self-center mb-3">{order.orderId.slice(8, 12)}</h1>
          {order.products.map((product) => (
            product.name==="Promo almuerzo" || product.name==="Brunch"?
            <>
            <div key={order.docId} className="flex justify-between px-3">
              <div >{product.name}</div>
              <div >{product.quantity}</div>
            </div>
            <div className="text-sm">{product.comestible}</div>
            <div className="text-sm">{product.bebestible}</div>
            </>
            : 
            <div key={order.docId} className="flex justify-between px-3">
              <div >{product.name}</div>
              <div >{product.quantity}</div>
            </div>
          ))}
        </div>
        <div className="justify-self-end content-end self-center">{order.observaciones}</div>
      </div>

      <button onClick={toggleModal} className=' bg-gray-500 hover:bg-blue-700  place-content-center text-white font-bold py-2 px-4 m-4 mt-3 rounded justify-self-end'>Listo</button>
    </div >
  )
}

//key={`${order.orderId}-${product.name}`} 
