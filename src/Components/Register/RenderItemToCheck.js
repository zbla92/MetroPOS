import React from 'react';

function RenderItemToCheck({ name, qty, price, amount }) {
    return (
        <div className="item-bdy-list">
            <div className="item-bdy-name">{name}</div>
            <div className="item-bdy-info">
                <div className="item-bdy-qty">{qty}</div>
                <div className="item-bdy-unit">{price}</div>
                <div className="item-bdy-amount">{amount}</div>
            </div>
        </div>
    );
}
export default RenderItemToCheck;
