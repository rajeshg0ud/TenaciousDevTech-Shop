import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/context';
import CartItem from './cartItem';
import { useContext } from 'react';
import './cart.css';

import { useNavigate } from 'react-router-dom';

const Cart=()=>{
    const {cartItems, getTotalCartAmount}= useContext(ShopContext);
    const totalAmount=getTotalCartAmount();
    const navigate= useNavigate();

    return(
        <div className='cart'>
            <div className="cartTitle">
                <h1> Your Cart items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id] !==0){ 
                        return <CartItem key={product.id} data={product} />;
                    }
                    })}
            </div>
            {totalAmount>0?
            <div className="checkout">
                <p >Subtotal: <span className='totalAmount'>₹{totalAmount}</span></p>
                <button onClick={()=> navigate("/")}>Continue Shopping</button>
                <button>Checkout</button>
            </div>
            : <h1> Your Cart is Empty</h1>}

        </div>
    );
}

export default Cart;