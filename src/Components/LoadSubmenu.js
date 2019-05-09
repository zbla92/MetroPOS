import submenu from '../data/menu.json';
import '../css/loadSubmenu.css';
import React from 'react';

function LoadSubmenu() {
    return (
        <div>
            <div className="img-container">
                <div className="img-div">
                    <img src={submenu.pizzas[0].image} />
                </div>
                <div className="img-overlay">
                    <p>{submenu.salads[3].name}</p>
                </div>
            </div>
        </div>
    );
}
export default LoadSubmenu;
