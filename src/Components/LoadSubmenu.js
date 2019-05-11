import '../css/loadSubmenu.css';
import React from 'react';
import ItemToInject from './ItemToInject';

const LoadSubmenu = ({submenuName}) => {
    
    // Ovdje sam radio destructuring na props
    const renderedList = submenuName.map(e => {
        return <ItemToInject name={e.name} image={e.image} price={e.price} key={e.name}/>;
    });

    return <div className="submenu-injection-container">{renderedList}</div>;
};


export default LoadSubmenu;
