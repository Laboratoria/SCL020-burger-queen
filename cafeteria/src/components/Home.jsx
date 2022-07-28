import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
    return (<>
        <div className="flex self-center justify-self-center		items-center	justify-center	outline-1 max-w-md mx-auto rounded overflow-hidden shadow-lg" >
            <div className=" rounded overflow-hidden shadow-lg">
                <div className="grid gap-4 grid-cols-2 grid-rows-1 place-content-center		 p-8">
                    <div className=' bg-gray-500 hover:bg-blue-700  place-content-center text-white font-bold py-2 px-4  rounded'>
                        <Link to="/RestaurantMenu">Menú</Link>
                    </div>
                    <div className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        <Link to="/Diner">Diner</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}