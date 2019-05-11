import '../css/loadSubmenu.css';
import React from 'react';
import submenu from '../data/menu.json';
import ItemToInject from './ItemToInject';

const LoadSubmenu = ({submenuName}) => {
    
    // Ovdje sam radio destructuring na props
    const renderedList = submenuName.map(e => {
        return <ItemToInject name={e.name} image={e.image} price={e.price} />;
    });

    return <div className="submenu-injection-container">{renderedList}</div>;
};


export default LoadSubmenu;
