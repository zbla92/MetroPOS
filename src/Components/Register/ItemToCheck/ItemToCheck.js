import React from 'react';
import RenderItemToCheck from './RenderItemToCheck/RenderItemToCheck';
import './itemToCheck.css';

function ItemToCheck({ items, updateOrderedItems }) {
    const renderList = items.map(e => {
        let id = items.indexOf(e) + 1;
        const name = e.name;
        let price = e.price;
        const qty = e.qty;
        let amount = qty * price;
        amount = amount.toFixed(2);
        price = price.toFixed(2);

        return (
            <RenderItemToCheck
                key={id}
                name={name}
                price={price}
                qty={qty}
                amount={amount}
                id={id}
                items={items}
                updateOrderedItems={updateOrderedItems}
            />
        );
    });
    return renderList;
}
export default ItemToCheck;
