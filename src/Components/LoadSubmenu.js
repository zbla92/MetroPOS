import submenu from '../data/menu.json';
import '../css/loadSubmenu.css';
import React from 'react';

function LoadSubmenu() {
    return (
        <div>
            <div className="img-container">
                <img src={submenu.pizzas[0].image} />
                <div className="img-overlay">
                    <p>{submenu.salads[3].name}</p>
                </div>
            </div>
        </div>
    );
}
export default LoadSubmenu;
