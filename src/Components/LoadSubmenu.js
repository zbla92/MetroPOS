import '../css/loadSubmenu.css';
import React from 'react';
import submenu from '../data/menu.json';
import ItemToInject from './ItemToInject';

const LoadSubmenu = () => {
    // Ovdje sam radio destructuring na props
    const renderedList = submenu.salads.map(e => {
        return <ItemToInject name={e.name} image={e.image} />;
    });

    return <div className="submenu-injection-container">{renderedList}</div>;
};
export default LoadSubmenu;
