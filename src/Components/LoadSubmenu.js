import submenu from '../data/menu.json';
import '../css/loadSubmenu.css';
import React from 'react';


function LoadSubmenu  (){
    return(
        <div>
            <div className="submenu-row">
                <div className="img-container">
                    <img src={submenu.pizzas[0].image}></img>
                </div>
            </div>
        </div>
    )
}
export default LoadSubmenu;