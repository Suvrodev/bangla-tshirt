import React, { useState } from 'react';
import './Home.css'
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const t_shirts=useLoaderData()
  //  console.log(t_shirts)

    const [cart,setCart]=useState([]);
    const handleAddToCart=tshirt=>{
        const exists=cart.find(ts=>ts._id===tshirt._id)
        if(exists){
            toast('You Have already added this t-shirt')
        }else{
            const newCart=[...cart,tshirt]
            setCart(newCart)
        // console.log(tshirt)
        }
    }

    const handleRemoveFromCart=(id)=>{
        console.log(id)
        const remain=cart.filter(shirt=>shirt._id!==id)
        setCart(remain)
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
                <Cart
                 cart={cart} 
                 handleRemoveFromCart={handleRemoveFromCart}
                 ></Cart>
            </div>
        </div>
    );
};

export default Home;