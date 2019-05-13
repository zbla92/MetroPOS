import '../css/itemToInject.css';
import React from 'react';

function ItemToInject({ name, image, price, setOrderedItem }) {
    const arr = [name, image, price];
    return (
        <div
            className="img-container"
            onClick={() => {
                setOrderedItem(arr);
            }}
        >
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
