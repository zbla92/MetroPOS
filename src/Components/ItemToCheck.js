import React from 'react';

function ItemToCheck({ items }) {
    const renderList = items.map(e => {
        const name = e[0];
        const price = e[2];

        return (
            <div className="item-bdy-list">
                <div className="item-bdy-name">{name}</div>
                <div className="item-bdy-info">
                    <div className="item-bdy-qty">{1}</div>
                    <div className="item-bdy-unit">{price}</div>
                    <div className="item-bdy-amount">{1}</div>
                </div>
            </div>
        );
    });
    return renderList;
}
export default ItemToCheck;
