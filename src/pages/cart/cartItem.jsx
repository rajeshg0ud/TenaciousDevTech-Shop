import './cart.css';
import React, { useContext } from 'react';
import {ShopContext} from '../../context/context';



const CartItem=(props)=>{
    const {cartItems, addToCart, removeFromCart}= useContext(ShopContext);
    const {id, productName, price, productImage}= props.data;
    const cartItemAmount= cartItems[id];

    return(
    <div className='cartItem'>
        <img src={productImage} />
        <div className='description'>
            <p><b>{productName}</b></p>
            <p> ₹{price}</p>
            <div className='handleCount'>
                <button onClick={()=>{removeFromCart(id)}}>-</button>
                <input value={cartItemAmount}/>
                <button onClick={()=>{addToCart(id)}}>+</button>
            </div>
        </div>

    </div>)
}

export default CartItem;