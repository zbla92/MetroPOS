import item from '../data/menu.json';
import '../css/itemToInject.css';
import React from 'react';
import submenu from '../data/menu.json';

function ItemToInject({ name, image }) {
    return (
        <div className="img-container">
            <div className="img-div">
                <img src={image} />
            </div>
            <div className="img-overlay">
                <p>{name}</p>
            </div>
        </div>
    );
}
export default ItemToInject;
