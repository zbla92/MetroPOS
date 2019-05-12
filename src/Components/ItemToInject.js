import '../css/itemToInject.css';
import React from 'react';
import itemList from '../data/menu.json'


function ItemToInject({ name, image, price }) {
    const calculateAmount = (price, qty) => {
        return price * qty;
    }

    const itemCheck = () => {
        const qty = 2;
        const html =`<div class="item-bdy-list">
            <div class="item-bdy-name">${name}</div>
            <div class="item-bdy-info">
                <div class="item-bdy-qty">${qty}</div>
                <div class="item-bdy-unit">${price}</div>
                <div class="item-bdy-amount">
                    ${calculateAmount(price, qty)}
                </div>
            </div>
        </div>`;

        const injectionPlace = document.getElementById('item-injection-place');
        injectionPlace.insertAdjacentHTML("beforeend", html)
    }

    
    return (
        <div className="img-container" onClick={() => {
                itemCheck();
                }}>
            <div className="img-div">
                <img src={image} alt={image} />
            </div>
            <div className="img-overlay">
                <p>{name}</p>
            </div>
        </div>
    );
}
export default ItemToInject;
