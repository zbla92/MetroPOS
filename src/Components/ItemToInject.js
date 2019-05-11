import '../css/itemToInject.css';
import React from 'react';


function ItemToInject({ name, image, price }) {
    return (
        <div className="img-container" onClick={() => {console.log(price)}}>
            <div className="img-div">
                <img src={image} alt={name} />
            </div>
            <div className="img-overlay">
                <p>{name}</p>
            </div>
        </div>
    );
}
export default ItemToInject;
