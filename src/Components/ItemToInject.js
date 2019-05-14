import '../css/itemToInject.css';
import React from 'react';

function ItemToInject({ name, image, price, setOrderedItem, items }) {
    const arr = {
        name: name,
        image: image,
        price: parseFloat(price),
        qty: 1,
        flagged: false
    };
    return (
        <div
            className="img-container"
            onClick={() => {
                setOrderedItem(items, arr);
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
