import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className = "product">
            <div className = "product__info">
                <p>The Lean StartUp</p>
                <p className = "product__price">
                    <small>$</small>
                    <strong>19.59</strong>
                </p>
                <div className = "product__rating">
                    <p>⭐</p>
                </div>                
            </div>
            <img src = "https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
