import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    const {_id,index,price,picture,name,gender}=tshirt;
    return (
        <div className='tshirt'>
             <img src={picture} alt="" />
             <small>{_id}</small>
             <h4>{name}</h4>
             <p>Price: {price} </p>
             <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;