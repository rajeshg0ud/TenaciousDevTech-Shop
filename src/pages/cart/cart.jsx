import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/context';
import CartItem from './cartItem';
import { useContext } from 'react';
import './cart.css';

const Cart=()=>{
    const {cartItems}= useContext(ShopContext);
    return(
        <div className="cart">
            <div className="cartTitle">
                <h1> Your Cart items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id] !==0){ 
                        return <CartItem data={product} />;
                    }
                    })}
            </div>
        </div>
    );
}

export default Cart;