import './shop.css';
import {ShopContext} from '../../context/context';
import { useContext } from 'react';
import {ShoppingCart} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

function Product(props){
    const navigate= useNavigate();

    const {id, productName, price, productImage}= props.data;

    const {addToCart, cartItems}= useContext(ShopContext);

    const cartItemAmount= cartItems[id];
    return(
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>
                ₹{price}
                </p>
            </div>
            <div> 
                {cartItemAmount===0 && <a className='addToCartBttn' onClick={()=>addToCart(id)}>
                    <ShoppingCart  size={16} />{"ADD TO CART"}</a>}
                {cartItemAmount>0 && <a className='addToCartBttn' onClick={()=> navigate("/cart")}>
                    <ShoppingCart size={16} />GO TO CART</a> }     
            </div>
        </div>

    )
}

export default Product;