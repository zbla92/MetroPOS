import React from 'react';

function RenderItemToCheck({ name, qty, price, amount, id, items, updateOrderedItems }) {
    console.log(items);
    //UnspaghettyTheCode function call
    function checkForId(e) {
        if (e.target.parentNode.parentNode.id.length > 1 && e.target.parentNode.parentNode.id.length < 10) {
            return document.getElementById(e.target.parentNode.parentNode.id);
        } else if (e.target.parentNode.id.length > 1 && e.target.parentNode.id.length < 10) {
            return document.getElementById(e.target.parentNode.id);
        } else return document.getElementById(e.target.id);
    }

    function flagItemInState(e, updateOrderedItems) {
        let listOfItems = items;
        const id = e.id.slice(4);
        listOfItems[id - 1].flagged = true;
        updateOrderedItems(listOfItems);
    }

    return (
        <div
            id={`itm-${id}`}
            className="item-bdy-list"
            onClick={e => {
                let item = checkForId(e);
                flagItemInState(item, updateOrderedItems);
                item.classList.toggle('active-itm');
            }}
        >
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
