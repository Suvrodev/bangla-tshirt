import React, { useState } from 'react';
import './Home.css'
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {
    const t_shirts=useLoaderData()
  //  console.log(t_shirts)

    const [cart,setCart]=useState([]);
    const handleAddToCart=tshirt=>{
        console.log(tshirt)
    }


    return (
        <div className='home_container'>
            <div className='tshirts_container'>
                {/* <h2>This is Home</h2>
                <h1>T-SHirts: {t_shirts.length} </h1> */}
                {
                    t_shirts.map(tshirt=> <TShirt
                    key={tshirt._id}
                    handleAddToCart={handleAddToCart}
                    tshirt={tshirt}
                    ></TShirt> )
                }
            </div>
            <div className="cart_container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;