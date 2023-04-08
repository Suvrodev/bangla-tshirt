import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
   // const {_id,index,price,picture,name,gender}=cart;
   let message;
   if(cart.length===0){
     message= <p>Please add some product</p>
   }else{
    message= <div>
        <h2>Barolox</h2>
        <p>Thanks for wasting your money</p>
        </div>
   }
    return (
        <div className='cart_container_'>
            <h2 className={cart.length===1? 'green_ need':'red_ need' } >Order Summery: {cart.length}</h2>
             <p className={`bold_ border_ need ${cart.length===0? 'green_': 'red_' }`}>SomeThing</p>
            {cart.length>2? <span className='orange_ need'>Aro keno</span>: <span className='red_ need'>Fokira</span> }
             {message}
            {
                cart.map(shirt=> <p 
                    key={shirt._id}
                    >{shirt.name}
                    <button onClick={()=>handleRemoveFromCart(shirt._id)} className='removeButton'>X</button>
                    </p> )
            }
            {
                cart.length===2 && <p className='purple_ need'>Double Bonanza!!</p>
            }
            {
                cart.length ===3 || <h3 className='yellow_ need'>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;