import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
   // const {_id,index,price,picture,name,gender}=cart;
    return (
        <div className='cart_container'>
            <h1>Order Summery: {cart.length}</h1>
            {
                cart.map(shirt=> <p 
                    key={shirt._id}
                    >{shirt.name}
                    <button onClick={()=>handleRemoveFromCart(shirt._id)} className='removeButton'>X</button>
                    </p> )
            }
        </div>
    );
};

export default Cart;