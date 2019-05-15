import '../css/item.css';
import itemList from '../data/menus/menu.json';
import React from 'react';

function Item() {
    return (
        <div className="item-bdy-list">
            <div className="item-bdy-name">{itemList.Pizzas[0].name}</div>
            <div className="item-bdy-info">
                <div className="item-bdy-qty">2</div>
                <div className="item-bdy-unit">{itemList.Pizzas[0].price}</div>
                <div className="item-bdy-amount">
                    {itemList.Pizzas[0].price * 2}
                </div>
            </div>
        </div>
    );
}
export default Item;
