import item from '../data/menu.json';
import '../css/ItemToInject.css';
import React from 'react';
import submenu from '../data/menu.json';

function ItemToInject() {
    return (
        <div className="img-container">
            <div className="img-div">
                <img src={submenu.pizzas[0].image} />
            </div>
            <div className="img-overlay">
                <p>{submenu.salads[3].name}</p>
            </div>
        </div>
    );
}
export default ItemToInject;
