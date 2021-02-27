import React, { useState } from 'react';
import '../../fakeData'
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
const Shop = () => {  
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    


    const handleClick = (product) => {
        console.log("clicked me", product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    

    return (  
        <div className="container">
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} key={pd.key} handleClick={handleClick}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        
        </div>
    );
};

export default Shop;