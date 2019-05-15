import React from 'react';
import '../../css/item.css';

function ItemToCheck({ items }) {
    const renderList = items.map(e => {
        const name = e.name;
        let price = e.price;
        const qty = e.qty;
        let amount = qty * price;
        amount = amount.toFixed(2);
        price = price.toFixed(2);

        return (
            <div className="item-bdy-list" onClick={e => console.log(items)}>
                <div className="item-bdy-name">{name}</div>
                <div className="item-bdy-info">
                    <div className="item-bdy-qty">{qty}</div>
                    <div className="item-bdy-unit">{price}</div>
                    <div className="item-bdy-amount">{amount}</div>
                </div>
            </div>
        );
    });
    return renderList;
}
export default ItemToCheck;
