import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.cart
    const itemPrice = cart.reduce( (itemPrice, product) => itemPrice + product.price, 0).toFixed(2)
    
    let shipping = 0;
    if(itemPrice<15  && itemPrice>0){
        shipping = 12.99
    }
    else if( itemPrice>15 && itemPrice<=35){
        shipping = 4.99
    }
    else if(itemPrice>35){
        shipping = 0
    }
    const totalBeforeTax = (Number(itemPrice) + shipping).toFixed(2)
    const tax = Number(totalBeforeTax)/10
    const estimatedTax = tax.toFixed(2)
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Ordered Items: {cart.length}</h4>
            <h5>item: $ {itemPrice}</h5>
            <h5>Shipping & Holding: $ {shipping}</h5>
            <h5>Total before Tax: $ {totalBeforeTax}</h5>
            <h5>Estimated Tax: ${estimatedTax}</h5>
            <h3>Order Total: ${Number(totalBeforeTax) + Number(estimatedTax)}</h3>
        </div>
    );
};

export default Cart;