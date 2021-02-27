import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    // console.log(props)
    const {name, img, seller, price, stock}= props.product
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
            <h4 className='title'>{name}</h4>
            <p><small>By: {seller}</small></p>
            <h4>${price}</h4>
            <p><small>Only {stock} left in stock- order soon</small></p>
            <button className='cart-btn' onClick={() => props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;